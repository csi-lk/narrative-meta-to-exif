#!/usr/bin/env node
const fs = require('fs')
const exiftool = require('node-exiftool')
const p = require('commander')
const chalk = require('chalk')

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
          log(JSON.parse(data))
        })
      }
      return item
    })
  })
}


p.parse(process.argv)