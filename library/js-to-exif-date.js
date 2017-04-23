// Inspired from https://github.com/mohsen1/to-exif-date/blob/master/index.js 👍

module.exports = function toExifDate(date) {
  if (!(date instanceof Date)) {
    throw new Error('date argument should be a Date instance.')
  }

  function pad(number) {
    if (number > 9) {
      return number
    }
    return `0${number}`
  }

  return `${date.getYear() + 1900}:${pad(date.getMonth() + 1)}:${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}