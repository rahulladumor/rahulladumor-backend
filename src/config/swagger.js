const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Determine the server URLs based on environment
const servers = [];

// Add production server if available
if (process.env.RENDER_EXTERNAL_URL) {
  servers.push({
    url: `https://${process.env.RENDER_EXTERNAL_HOSTNAME || 'rahulladumor-backend.onrender.com'}`,
    description: 'Production server',
  });
} else if (process.env.NODE_ENV === 'production') {
  servers.push({
    url: 'https://rahulladumor-backend.onrender.com',
    description: 'Production server',
  });
}

// Always add localhost for development
servers.push({
  url: `http://localhost:${process.env.PORT || 3002}`,
  description: 'Development server',
});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rahul Ladumor Portfolio API',
      version: '1.0.0',
      description: 'A comprehensive Express API for portfolio management with health and profile endpoints',
    },
    servers: servers,
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'], // paths to files containing OpenAPI definitions
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
