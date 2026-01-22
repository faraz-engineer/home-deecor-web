
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

try {
    let sitemap = fs.readFileSync(sitemapPath, 'utf8');

    // Replace all uppercase letters in <loc> tags with lowercase
    const newSitemap = sitemap.replace(/<loc>(.*?)<\/loc>/g, (match, url) => {
        return `<loc>${url.toLowerCase()}</loc>`;
    });

    if (sitemap !== newSitemap) {
        fs.writeFileSync(sitemapPath, newSitemap, 'utf8');
        console.log('Successfully converted sitemap URLs to lowercase.');
    } else {
        console.log('Sitemap already has lowercase URLs.');
    }

} catch (err) {
    console.error('Error processing sitemap:', err);
}
