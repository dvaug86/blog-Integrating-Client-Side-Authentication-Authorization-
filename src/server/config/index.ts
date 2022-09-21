import * as dotenv from 'dotenv';

dotenv.config();

export default{
    mysql: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA
    },
    mailgun:{
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        toEmail: process.env.MAILGUN_TO_EMAIL
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRES
    },
    stripe:{
        stripe: process.env.STRIPE_API_KEY
    }

};