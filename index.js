#!/usr/bin/env node
const fs = require('fs')
const exiftool = require('node-exiftool')
const p = require('commander')
const j2ed = require('./library/js-to-exif-date.js')

const log = console.log
const ep = new exiftool.ExiftoolProcess()

p
  .version('0.0.1')
  .option('-p, --photo <path>', 'Photo Directory')
  .option('-m, --meta <path>', 'Meta Directory')
  .parse(process.argv)

if (!p.photo || !p.meta) {
  log('Need photo directory and meta directory set')
} else {
  // Get all files in dir
  fs.readdir(p.photo, (dirErr, items) => {
    if (dirErr) throw dirErr
    // Loop through all files in photo directory
    items.map((item) => {
      // Only match jpg files
      if (item.split('.').pop() === 'jpg') {
        // Read corresponding meta file in directory
        fs.readFile(`${p.meta}${item.split('.')[0]}.json`, (fileErr, data) => {
          if (fileErr) throw fileErr
          // Get the metadata from the corresponding file
          const metadata = JSON.parse(data)
          // Get the datetime and put it in EXIF format
          const dateTime = j2ed(new Date(metadata.taken_at_local))
          // Write datetime to photo
          ep
            .open()
            .then(() => ep.writeMetadata(`${p.photo}${item}`, {
              DateTimeOriginal: dateTime,
              CreateDate: dateTime,
            }, ['overwrite_original']))
            .then(log)
        })
      }
      return item
    })
  })
}


p.parse(process.argv)