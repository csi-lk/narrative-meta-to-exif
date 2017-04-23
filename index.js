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
  log(p.meta)
  fs.readdir(p.photo, (err, items) => {
    if (!err) {
      log(items)
    } else {
      throw new Error(err)
    }
  })
}


p.parse(process.argv)