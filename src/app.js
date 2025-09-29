const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const { swaggerUi, specs } = require("./config/swagger");
const { errorHandler } = require("./middleware/errorHandler");

// Connect to MongoDB
connectDB();

// Import routes
const healthRoutes = require("./routes/health.routes");
const profileRoutes = require("./routes/profile.routes");
const emailRoutes = require("./routes/email.routes");

// Import new MongoDB-based routes
const personalInfoRoutes = require("./routes/personalInfo.routes");
const skillsRoutes = require("./routes/skills.routes");
const certificationsRoutes = require("./routes/certifications.routes");
const servicesRoutes = require("./routes/services.routes");
const workExperienceRoutes = require("./routes/workExperience.routes");
const testimonialsRoutes = require("./routes/testimonials.routes");
const caseStudiesRoutes = require("./routes/caseStudies.routes");
const sectionDataRoutes = require("./routes/sectionData.routes");
const additionalInfoRoutes = require("./routes/additionalInfo.routes");
const educationRoutes = require("./routes/education.routes");
const bulkUpdateRoutes = require("./routes/bulkUpdate.routes");

const app = express();

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'https://rahulladumor-backend.onrender.com',
      // Add your frontend URLs here
    ];
    
    // Allow any origin in development
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    // Check if the origin is allowed
    if (allowedOrigins.indexOf(origin) !== -1 || origin.includes('.onrender.com')) {
      callback(null, true);
    } else {
      // In production, allow all origins but log unknown ones
      console.log('Request from origin:', origin);
      callback(null, true); // Allow all for now to prevent CORS issues
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['X-Total-Count', 'Content-Range'],
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Swagger documentation with custom options
const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Rahul Ladumor Portfolio API Documentation",
  swaggerOptions: {
    persistAuthorization: true,
    tryItOutEnabled: true,
    supportedSubmitMethods: ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'],
  }
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

// Legacy routes (for backward compatibility)
app.use("/", healthRoutes);
app.use("/", profileRoutes);
app.use("/", emailRoutes);

// New API routes
app.use("/api/personal-info", personalInfoRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/certifications", certificationsRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/work-experience", workExperienceRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/case-studies", caseStudiesRoutes);
app.use("/api/section-data", sectionDataRoutes);
app.use("/api/additional-info", additionalInfoRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/bulk-update", bulkUpdateRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Rahul Ladumor Portfolio API",
    documentation: "/api-docs",
    version: "2.0.0",
    endpoints: {
      // Legacy endpoints
      health: "/health",
      profile: "/profile",
      contact: "/contact",
      // New API endpoints
      personalInfo: "/api/personal-info",
      skills: "/api/skills",
      certifications: "/api/certifications",
      services: "/api/services",
      workExperience: "/api/work-experience",
      testimonials: "/api/testimonials",
      caseStudies: "/api/case-studies",
      sectionData: "/api/section-data",
      additionalInfo: "/api/additional-info",
      education: "/api/education",
      bulkUpdate: "/api/bulk-update",
      bulkExport: "/api/bulk-update/export",
    },
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
