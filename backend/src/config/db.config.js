// config/db.config.js
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = prisma;
