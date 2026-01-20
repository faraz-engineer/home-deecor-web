const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;



// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Explicit root route for testing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
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