
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

try {
    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    const locRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    let found = false;

    console.log('Checking sitemap for uppercase URLs...');

    while ((match = locRegex.exec(sitemap)) !== null) {
        const url = match[1];
        if (/[A-Z]/.test(url)) {
            console.log(`Found uppercase URL: ${url}`);
            found = true;
        }
    }

    if (!found) {
        console.log('No uppercase URLs found in sitemap.xml.');
    }
} catch (err) {
    console.error('Error reading sitemap:', err);
}
