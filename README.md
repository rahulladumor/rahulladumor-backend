# Rahul Ladumor Portfolio Backend API

A professional Node.js Express API backend for Rahul Ladumor's portfolio website with MongoDB integration, comprehensive CRUD operations, and Swagger documentation.

## 🚀 Features

- **MongoDB Integration**: Object-wise data storage with professional schema design
- **RESTful APIs**: Complete CRUD operations for all data objects
- **Data Validation**: Joi-based request validation
- **Error Handling**: Comprehensive error handling middleware
- **API Documentation**: Interactive Swagger/OpenAPI documentation
- **Backward Compatibility**: Maintains existing frontend data structure
- **Professional Structure**: Clean, scalable file organization
- **Data Migration**: Automated script to migrate from static data to MongoDB

## 📁 Project Structure

```
rahulladumor-backend/
├── src/
│   ├── config/
│   │   ├── database.js          # MongoDB connection configuration
│   │   ├── data.js              # Static data (fallback)
│   │   ├── email.js             # Email configuration
│   │   └── swagger.js           # Swagger configuration
│   ├── controllers/
│   │   ├── personalInfo.controller.js
│   │   ├── skills.controller.js
│   │   ├── certifications.controller.js
│   │   ├── services.controller.js
│   │   ├── workExperience.controller.js
│   │   ├── testimonials.controller.js
│   │   ├── caseStudies.controller.js
│   │   ├── sectionData.controller.js
│   │   ├── profile.controller.js    # Updated for MongoDB integration
│   │   ├── email.controller.js
│   │   └── health.controller.js
│   ├── middleware/
│   │   ├── validation.js        # Joi validation schemas
│   │   └── errorHandler.js      # Error handling middleware
│   ├── models/
│   │   ├── PersonalInfo.js
│   │   ├── Skills.js
│   │   ├── Certifications.js
│   │   ├── Services.js
│   │   ├── WorkExperience.js
│   │   ├── Testimonials.js
│   │   ├── CaseStudies.js
│   │   └── SectionData.js
│   ├── routes/
│   │   ├── personalInfo.routes.js
│   │   ├── skills.routes.js
│   │   ├── certifications.routes.js
│   │   ├── services.routes.js
│   │   ├── workExperience.routes.js
│   │   ├── testimonials.routes.js
│   │   ├── caseStudies.routes.js
│   │   ├── sectionData.routes.js
│   │   ├── profile.routes.js
│   │   ├── email.routes.js
│   │   └── health.routes.js
│   └── app.js                   # Express app configuration
├── scripts/
│   └── migrate-data.js          # Data migration script
├── .env                         # Environment variables
├── .env.example                 # Environment variables template
├── package.json
├── server.js                    # Server entry point
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd rahulladumor-backend
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

Update the `.env` file:

```env
PORT=3002

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/rahulladumor_portfolio
DB_NAME=rahulladumor_portfolio

# Email Configuration (if using email features)
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

### 3. Database Setup

Start MongoDB service and run the migration script to populate the database:

```bash
# Run data migration
npm run migrate
```

### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3002`

## 📚 API Documentation

### Interactive Documentation

Visit `http://localhost:3002/api-docs` for interactive Swagger documentation.

### API Endpoints

#### Legacy Endpoints (Backward Compatibility)

- `GET /profile` - Get complete profile data
- `GET /health` - Health check
- `POST /contact` - Send contact email

#### New MongoDB-based Endpoints

**Personal Information**

- `GET /api/personal-info` - Get personal information
- `POST /api/personal-info` - Create personal information
- `PUT /api/personal-info/:id` - Update personal information
- `DELETE /api/personal-info/:id` - Delete personal information

**Skills**

- `GET /api/skills` - Get skills
- `POST /api/skills` - Create skills
- `PUT /api/skills/:id` - Update skills
- `DELETE /api/skills/:id` - Delete skills

**Certifications**

- `GET /api/certifications` - Get all certifications
- `GET /api/certifications/:id` - Get single certification
- `POST /api/certifications` - Create certification
- `PUT /api/certifications/:id` - Update certification
- `DELETE /api/certifications/:id` - Delete certification

**Services**

- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

**Work Experience**

- `GET /api/work-experience` - Get all work experiences
- `GET /api/work-experience/:id` - Get single work experience
- `POST /api/work-experience` - Create work experience
- `PUT /api/work-experience/:id` - Update work experience
- `DELETE /api/work-experience/:id` - Delete work experience

**Testimonials**

- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

**Case Studies**

- `GET /api/case-studies` - Get all case studies
- `GET /api/case-studies/:id` - Get single case study
- `POST /api/case-studies` - Create case study
- `PUT /api/case-studies/:id` - Update case study
- `DELETE /api/case-studies/:id` - Delete case study

**Section Data**

- `GET /api/section-data` - Get all section data
- `GET /api/section-data/:sectionType` - Get section data by type
- `POST /api/section-data` - Create section data
- `PUT /api/section-data/:sectionType` - Update section data
- `DELETE /api/section-data/:sectionType` - Delete section data

### Response Format

All API responses follow a consistent format:

```json
{
  "status": "success|error",
  "message": "Optional message",
  "data": "Response data",
  "count": "Number of items (for arrays)"
}
```

### Error Responses

```json
{
  "status": "error",
  "message": "Error description",
  "details": "Additional error details (validation errors)"
}
```

## 🔧 Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run migrate    # Run data migration script
```

## 🗄️ Database Schema

### Collections

1. **personalInfo** - Personal information (singleton)
2. **skills** - Skills data (singleton)
3. **certifications** - Individual certification records
4. **services** - Individual service records
5. **workExperience** - Individual work experience records
6. **testimonials** - Individual testimonial records
7. **caseStudies** - Individual case study records
8. **sectionData** - Complex section data (problemSection, solutionSection, etc.)

## 🛡️ Security Features

- Input validation using Joi
- MongoDB injection protection
- CORS configuration
- Error handling without sensitive data exposure
- Request size limits

## 🔄 Data Migration

The migration script (`scripts/migrate-data.js`) automatically:

1. Connects to MongoDB
2. Clears existing data
3. Migrates data from static files to MongoDB collections
4. Provides migration summary

Run migration:

```bash
npm run migrate
```

## 🔗 Frontend Compatibility

The `/profile` endpoint maintains complete backward compatibility with existing frontend applications. The response structure remains identical, ensuring seamless integration.

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3002
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/rahulladumor_portfolio
```

### Docker Deployment (Optional)

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3002
CMD ["npm", "start"]
```

## 📝 Development Guidelines

### Adding New Endpoints

1. Create model in `src/models/`
2. Create controller in `src/controllers/`
3. Create validation schema in `src/middleware/validation.js`
4. Create routes in `src/routes/`
5. Add routes to `src/app.js`
6. Update Swagger documentation

### Code Style

- Use async/await for asynchronous operations
- Implement proper error handling
- Add JSDoc comments for functions
- Follow RESTful API conventions
- Use consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Rahul Ladumor**

- Website: [https://www.rahulladumor.in](https://www.rahulladumor.in)
- LinkedIn: [https://linkedin.com/in/rahulladumor](https://linkedin.com/in/rahulladumor)
- GitHub: [https://github.com/rahulladumor](https://github.com/rahulladumor)

## 🆘 Support

For support and questions, please contact: rahuldladumor@gmail.com
