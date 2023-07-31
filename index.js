var pump = require('pump')
var through = require('through2')
const stripAnsi = require('strip-ansi');
const logzioNodejs = require('logzio-nodejs');

module.exports = main

function main (stream, options) {
  const logger = options.token ?
        logzioNodejs.createLogger(options) :
        null

  var myTransport = through(function (chunk, enc, cb) {
    const val = chunk.toString('utf8')
    console.log(val)
    if (logger) { logger.log(stripAnsi(val)) }
    cb()
  })

  pump(stream, myTransport)
}
