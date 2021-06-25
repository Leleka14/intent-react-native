const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use(morgan('dev'))

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://universities.hipolabs.com',
    changeOrigin: true,
  }),
)

app.listen('9000', 'localhost', () => {
  console.log('Starting Proxy at localhost:9000')
})
