const express = require("express");
const { getProfile } = require("../controllers/profile.controller");

const router = express.Router();

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get comprehensive user profile information
 *     description: Returns complete professional profile including personal info, experience, skills, certifications, services, and more
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfileResponse'
 *             example:
 *               data:
 *                 name: "Rahul Ladumor"
 *                 title: "3x AWS Certified Full-Stack JavaScript & Cloud Engineer"
 *                 tagline: "Serverless Architecture Expert | Saving Companies $100K+ Annually"
 *                 email: "rahuldladumor@gmail.com"
 *                 phone: "+91-7567611653"
 *                 location: "Surat, Gujarat, India"
 *                 website: "https://www.rahulladumor.in"
 *                 bio: "3x AWS Certified Full-Stack JavaScript & Cloud Engineer with 8+ years of experience..."
 *                 social:
 *                   linkedin: "https://linkedin.com/in/rahulladumor"
 *                   github: "https://github.com/rahulladumor"
 *                   twitter: "https://twitter.com/ladumorrahul"
 *                 skills:
 *                   primary: ["AWS Lambda & Serverless Architecture", "Full-Stack JavaScript Development"]
 *                 certifications: []
 *                 experience:
 *                   years: "8+"
 *                   companies: "10+"
 *                   projects: "50+"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.get("/profile", getProfile);

module.exports = router;
