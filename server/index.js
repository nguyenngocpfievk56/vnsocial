const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vnsocial', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(require('body-parser').json());
app.use(require('cookie-parser')());

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host } = nuxt.options.server
  var port = 3001

  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/qa', require('./routes/qa'));
  app.use('/api/post', require('./routes/post'));

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
