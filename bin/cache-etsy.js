#!/usr/bin/env node
require = require('esm')(module)
const { put_etsy_cache } = require('../s3')
put_etsy_cache()
