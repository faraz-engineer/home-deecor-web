const { posts, getLatestPosts } = require('./postsData');
const path = require('path');
const fs = require('fs');

const req = { path: '/cleaning' };
const actualPath = req.path === '/' ? 'index' : req.path.substring(1).replace(/\/$/, "");
let page = actualPath === '' ? 'index' : actualPath;

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
        console.log('Found view:', viewName);
        console.log('Path:', viewPath);

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
            console.log('Category Posts Count:', categoryPosts.length);
        } else {
            console.log('Not a category page mapping.');
        }
        break;
    }
}
console.log('Test complete.');
