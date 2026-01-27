const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));



// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for redirecting old URLs (spelling fixes and category removal)
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

    const categories = [
        'cleaning',
        'diy-project',
        'gardening',
        'home-decor-article',
        'home-improvement-article',
        'real-estate'
    ];

    // Redirect category/article to /article
    for (const cat of categories) {
        if (req.path.startsWith(`/${cat}/`)) {
            const newPath = req.path.replace(`/${cat}/`, '/');
            return res.redirect(301, newPath);
        }
    }

    const redirects = {
        '/fix-leaky-faucit': '/fix-leaky-faucet',
        '/seal-ar-leak': '/seal-air-leak',
        '/budget-freindly-kitchen': '/budget-friendly-kitchen',
        '/begining-wood-working': '/beginning-wood-working',
    };

    if (redirects[req.path]) {
        return res.redirect(301, redirects[req.path]);
    }

    if (req.path.startsWith('/home-deccor-article/')) {
        return res.redirect(301, req.path.replace('/home-deccor-article/', '/'));
    }

    next();
});

// Middleware to enforce lowercase URLs
app.use((req, res, next) => {
    if (/[A-Z]/.test(req.path)) {
        console.log(`[Redirect] Enforcing lowercase: ${req.path}`);
        return res.redirect(301, req.path.toLowerCase());
    }
    next();
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files
app.use(express.static('public', {
    maxAge: '1y',
    setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
        } else {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
    }
}));

// Blog data helpers
const { posts, getLatestPosts } = require('./postsData');

// Main Route handler
app.get(/(.*)/, (req, res, next) => {

    // Skip API routes or static files
    if (req.path.startsWith('/submit-') || req.path.includes('.')) {
        return next();
    }

    const actualPath = req.path === '/' ? 'index' : req.path.substring(1).replace(/\/$/, "");
    let page = actualPath === '' ? 'index' : actualPath;

    const fs = require('fs');
    const path = require('path');

    const searchDirs = [
        '',
        'cleaning',
        'diy-project',
        'gardening',
        'home-decor-article',
        'home-improvement-article',
        'real-estate'
    ];

    for (const dir of searchDirs) {
        let viewName = dir ? `${dir}/${page}` : page;
        let viewPath = path.join(__dirname, 'views', viewName + '.ejs');

        if (fs.existsSync(viewPath)) {
            // Home page: pass latest posts for dynamic sections
            if (viewName === 'index') {
                const { getLatestByCategory } = require('./postsData');
                const latestPosts = getLatestPosts(9);
                const homeImprovementPosts = getLatestByCategory('home-improvement', 6);
                const homeDecorPosts = getLatestByCategory('home-decor', 6);
                const gardeningPosts = getLatestByCategory('gardening', 6);

                return res.render(viewName, {
                    latestPosts,
                    homeImprovementPosts,
                    homeDecorPosts,
                    gardeningPosts
                });
            }

            // Blog listing page: pass all posts
            if (viewName === 'blog') {
                return res.render(viewName, { posts });
            }

            // Category pages: pass category-specific posts
            const categoryMap = {
                'cleaning': 'cleaning',
                'diy-projects': 'diy-project',
                'gardening': 'gardening',
                'home-decor': 'home-decor',
                'home-improvement': 'home-improvement',
                'real-estate': 'real-estate'
            };

            if (categoryMap[viewName]) {
                const categoryPosts = posts.filter(p => p.category === categoryMap[viewName]);
                return res.render(viewName, { categoryPosts });
            }

            // Article pages: pass related posts
            if (dir) {
                const categoryMappingForArticles = {
                    'cleaning': 'cleaning',
                    'diy-project': 'diy-project',
                    'gardening': 'gardening',
                    'home-decor-article': 'home-decor',
                    'home-improvement-article': 'home-improvement',
                    'real-estate': 'real-estate'
                };
                const articleCategory = categoryMappingForArticles[dir];
                if (articleCategory) {
                    const relatedPosts = posts.filter(p => p.category === articleCategory && p.slug !== page).slice(0, 5);
                    return res.render(viewName, { relatedPosts });
                }
            }

            return res.render(viewName);
        }
    }

    next();
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