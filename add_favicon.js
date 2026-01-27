const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const faviconTag = '    <link rel="icon" type="image/png" href="/images/favicon.png">';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            if (file !== 'partials' && file !== 'components') {
                processDirectory(filePath);
            }
        } else if (file.endsWith('.ejs')) {
            updateFile(filePath);
        }
    });
}

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if favicon already exists
    if (content.includes('rel="icon"') || content.includes('rel="shortcut icon"')) {
        console.log(`Skipping (already has favicon): ${filePath}`);
        return;
    }

    // Try to insert after <meta name="viewport" ...> or before <title>
    const viewportRegex = /<meta name="viewport"[^>]+>/i;
    const titleRegex = /<title>/i;

    if (viewportRegex.test(content)) {
        content = content.replace(viewportRegex, (match) => `${match}\n${faviconTag}`);
        console.log(`Updated (after viewport): ${filePath}`);
    } else if (titleRegex.test(content)) {
        content = content.replace(titleRegex, (match) => `${faviconTag}\n    ${match}`);
        console.log(`Updated (before title): ${filePath}`);
    } else if (content.includes('</head>')) {
        content = content.replace('</head>', `${faviconTag}\n</head>`);
        console.log(`Updated (before </head>): ${filePath}`);
    } else {
        console.log(`Could not find insertion point: ${filePath}`);
        return;
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

processDirectory(viewsDir);
console.log('Favicon update complete.');
