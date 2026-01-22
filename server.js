const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));



// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for redirecting old URLs (spelling fixes)
app.use((req, res, next) => {
    // 1. Remove trailing slash (except for root '/')
    if (req.path.length > 1 && req.path.endsWith('/')) {
        const query = req.url.slice(req.path.length);
        return res.redirect(301, req.path.slice(0, -1) + query);
    }

    // 2. Redirect /index to /
    if (req.path === '/index') {
        const query = req.url.slice(req.path.length);
        return res.redirect(301, '/' + query);
    }

    const redirects = {
        '/home-improvement-article/fix-leaky-faucit': '/home-improvement-article/fix-leaky-faucet',
        '/home-improvement-article/seal-ar-leak': '/home-improvement-article/seal-air-leak',
        '/home-improvement-article/budget-freindly-kitchen': '/home-improvement-article/budget-friendly-kitchen',
    };

    if (redirects[req.path]) {
        return res.redirect(301, redirects[req.path]);
    }

    if (req.path.startsWith('/home-deccor-article/')) {
        return res.redirect(301, req.path.replace('/home-deccor-article/', '/home-decor-article/'));
    }

    next();
});

// Middleware to enforce lowercase URLs
app.use((req, res, next) => {
    if (/[A-Z]/.test(req.path)) {
        return res.redirect(301, req.path.toLowerCase());
    }
    next();
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files from 'public' directory with caching
app.use(express.static('public', {
    maxAge: '1y', // Cache for 1 year
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            // HTML files should not be cached aggressively if they change
            res.setHeader('Cache-Control', 'no-cache');
        } else {
            // 1 year cache for static assets (images, css, js)
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
    }
}));

// Route handler for pages
app.get(/(.*)/, (req, res, next) => {
    // Skip API routes or static files that might have been missed
    if (req.path.startsWith('/submit-') || req.path.includes('.')) {
        return next();
    }

    let page = req.path === '/' ? 'index' : req.path.substring(1);
    // Remove trailing slash if present
    if (page.endsWith('/')) {
        page = page.slice(0, -1);
    }

    // Check if the ejs file exists
    const fs = require('fs');
    const path = require('path');
    let viewPath = path.join(__dirname, 'views', page + '.ejs');

    // Handle directory roots (e.g. /cleaning/ -> /cleaning/index - no, user structure is flat files inside dir)
    // Actually user structure: /cleaning/clean-bathroom -> view/cleaning/clean-bathroom.ejs

    if (fs.existsSync(viewPath)) {
        res.render(page);
    } else {
        // Try index if it's a directory? The user logic was .html mapping.
        // Let's stick to direct mapping first.
        next();
    }
});

// 1. Nodemailer Transporter Setup
// Yeh woh configuration hai jo batati hai ki email kahan se bhejna hai.
// HUM GMAIL KA USE KAR RAHE HAIN.
// 1. Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    // Ab hum service: 'gmail' ki jagah host aur port use karenge
    host: 'smtp.gmail.com',
    port: 465, // <-- PORT 465 TRY KAREIN (Ye SSL use karta hai)
    secure: true, // <-- Jab port 465 ho, toh isko 'true' rakhein
    auth: {
        user: 'zafarshahzad275@gmail.com', // Aapki sending email
        pass: 'xjke viwd yfdi rjkb' // Aapka App Password
    }
});

app.post('/submit-email', (req, res) => {
    const userEmail = req.body.user_email;

    const mailOptions = {
        // GOR SE DEKHEIN: From mein bhi Zafar wali email hi honi chahiye!
        from: 'zafarshahzad275@gmail.com',

        // Jisko milni chahiye (Aapki main email)
        to: 'me.farazzafar@gmail.com',

        // Reply-To mein User ki email dalenge taaki aap reply kar sakein
        replyTo: userEmail,

        subject: `New Form Submission: ${userEmail}`,
        html: `
            <h3>New User Submission</h3>
            <p><strong>User Email:</strong> ${userEmail}</p>
            <p>Time: ${new Date().toLocaleString()}</p>
        `
    };


    // 3. Email bhejne ka kaam
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            // Client ko error response bhejein
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        } else {
            console.log('Email sent:', info.response);
            // Client ko success response bhejein
            res.json({ success: true, message: 'Your email has been successfully sent to the admin!' });
        }
    });
});

// Server ko start karna
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Open http://localhost:${port}/index.html to view the form.`);
});