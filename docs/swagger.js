module.exports = {
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: 'http://localhost:3000/doc-json', // example path to json
      defaultModelRendering: 'schema',
    },
  }

  