#! /usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))

const token = argv.t || argv.token
const type = argv.type || 'nodejs'
const host = argv.host || 'listener.logz.io'

require('./index')(
  process.stdin, 
  {
    token,
    type,
    host
  }
)
