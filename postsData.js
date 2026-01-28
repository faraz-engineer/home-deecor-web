// Central blog post configuration for Home Hub
// When you add a new blog page (EJS file), just add a new object
// to the `posts` array below. The homepage "Latest Articles" section
// and the blog listing page will update automatically.
//
// Fields:
// - slug: URL path and base filename, e.g. "fix-leaky-faucet"
// - category: one of "home-improvement", "cleaning", "home-decor", "gardening", "diy-project", "real-estate"
// - title: card title
// - image: card image path in /public/images
// - excerpt: short description used on cards
// - date: YYYY-MM-DD string for sorting newest posts

const posts = [
    // Home Improvement
    {
        slug: 'fix-leaky-faucet',
        category: 'home-improvement',
        title: 'How to Fix a Leaky Faucet Without Calling a Plumber',
        image: '/images/fix-a-leaky-faucet.webp',
        excerpt: 'Learn how to fix a leaky faucet without calling a plumber using simple DIY steps.',
        date: '2025-01-10',
    },
    {
        slug: 'seal-air-leak',
        category: 'home-improvement',
        title: 'How to Seal Air Leaks Around Your Windows and Doors Easily',
        image: '/images/seal-air-leak.webp',
        excerpt: 'Seal air leaks around windows and doors to save energy and improve comfort.',
        date: '2025-01-12',
    },
    {
        slug: 'budget-friendly-kitchen',
        category: 'home-improvement',
        title: 'Budget-Friendly Kitchen Remodel Ideas That Feel Luxurious',
        image: '/images/kitchen-remodel.webp',
        excerpt: 'Discover budget-friendly kitchen remodel ideas that still feel high-end and luxurious.',
        date: '2025-01-15',
    },
    {
        slug: 'fire-safety',
        category: 'home-improvement',
        title: 'Essential Fire Safety Tips Every Homeowner Should Always Know',
        image: '/images/fire-safety-tips.webp',
        excerpt: 'Protect your family and home with these essential fire safety tips.',
        date: '2025-01-18',
    },
    {
        slug: 'weekend-home-project',
        category: 'home-improvement',
        title: 'Weekend Home Projects That Instantly Improve Property Value',
        image: '/images/weakend-home-projects.webp',
        excerpt: 'Easy weekend home projects that can quickly boost your property value.',
        date: '2025-01-20',
    },
    {
        slug: 'repair-dry-wall',
        category: 'home-improvement',
        title: 'How to Repair Drywall Cracks: A Simple Step-by-Step Guide',
        image: '/images/repair-dry-wall.webp',
        excerpt: 'Repair drywall cracks like a pro with this simple, step-by-step guide.',
        date: '2025-01-22',
    },
    // New Home Improvement articles
    {
        slug: 'unclog-drain-fast',
        category: 'home-improvement',
        title: 'Unclog a Drain Fast: Simple DIY Fixes That Really Work',
        image: '/images/unclog-drain.webp',
        excerpt: 'Learn how to unclog a drain fast using safe DIY methods, simple tools, and prevention tips to keep your sink and shower flowing.',
        date: '2025-05-01',
    },
    {
        slug: 'improve-home-insulation',
        category: 'home-improvement',
        title: 'Improve Home Insulation: Smart Ways to Save Energy Fast',
        image: '/images/home-insulation.webp',
        excerpt: 'Improve home insulation with easy upgrades that reduce energy bills, block drafts, and keep your home warmer in winter and cooler in summer.',
        date: '2025-05-03',
    },
    {
        slug: 'bathroom-remodel-guide',
        category: 'home-improvement',
        title: 'Bathroom Remodel Guide: Planning, Costs, and Smart Upgrades',
        image: '/images/bathroom-remodel-guide.webp',
        excerpt: 'Plan a bathroom remodel with smart layout ideas, budget-friendly upgrades, and modern finishes to boost comfort, style, and home value.',
        date: '2025-05-05',
    },

    // Cleaning
    {
        slug: 'ultimate-house-cleaning',
        category: 'cleaning',
        title: 'The Ultimate House Cleaning Schedule for Busy People',
        image: '/images/housecleaning-schedule.webp',
        excerpt: 'A realistic house cleaning schedule designed for busy people.',
        date: '2025-01-24',
    },
    {
        slug: 'clean-bathroom',
        category: 'cleaning',
        title: 'How to Clean a Bathroom from Top to Bottom',
        image: '/images/clean-a-bathroom.webp',
        excerpt: 'Step-by-step guide to deep clean your bathroom from top to bottom.',
        date: '2025-01-26',
    },
    {
        slug: 'homemade-cleaning-products',
        category: 'cleaning',
        title: 'Homemade Cleaning Products You Can Make Today',
        image: '/images/homemade-cleaning-products.webp',
        excerpt: 'Make safe, effective homemade cleaning products using simple ingredients.',
        date: '2025-01-28',
    },
    {
        slug: 'declutter-your-home-room',
        category: 'cleaning',
        title: 'How to Declutter Your Home Room by Room',
        image: '/images/declutter-home.webp',
        excerpt: 'Declutter your home room by room with an easy, practical plan.',
        date: '2025-01-30',
    },
    {
        slug: 'weekly-cleaning-room',
        category: 'cleaning',
        title: 'How to Create a Weekly Cleaning Routine That Sticks',
        image: '/images/weekly-cleaning-routine.webp',
        excerpt: 'Create a simple weekly cleaning routine you can actually stick to.',
        date: '2025-02-01',
    },
    {
        slug: 'storage-small-kitchen',
        category: 'cleaning',
        title: 'How to Maximize Storage in a Small Kitchen',
        image: '/images/storage-in-small-kitchen.webp',
        excerpt: 'Smart ways to maximize storage in a small kitchen without adding clutter.',
        date: '2025-02-03',
    },
    // New Cleaning posts

    {
        slug: 'clean-faster-simple-tips-to-tidy-your-home-quickly',
        category: 'cleaning',
        title: 'Clean Faster: Simple Tips to Tidy Your Home Quickly',
        image: '/images/clean-home.webp',
        excerpt: 'Learn how to clean faster with smart routines, quick tools, and room-by-room tips that save time and keep your home fresh every day.',
        date: '2025-05-20',
    },
    {
        slug: 'clean-cabinets-easy-steps-for-a-fresh-and-shiny-kitchen',
        category: 'cleaning',
        title: 'Clean Cabinets: Easy Steps for a Fresh and Shiny Kitchen',
        image: '/images/clean-cabinets.webp',
        excerpt: 'Learn how to clean cabinets the right way using safe methods, simple tools, and quick steps to remove grease, stains, and dullness easily.',
        date: '2025-05-22',
    },
    {
        slug: 'reduce-plastic-at-home-easy-swaps-that-really-help',
        category: 'cleaning',
        title: 'Reduce Plastic at Home: Easy Swaps That Really Help',
        image: '/images/reduce-plastic.webp',
        excerpt: 'Reduce plastic at home with simple swaps, smart shopping habits, and reusable alternatives that cut waste and keep your home eco-friendly.',
        date: '2025-05-24',
    },

    // DIY Projects
    {
        slug: '10-easy-diy-projects',
        category: 'diy-project',
        title: '10 Easy DIY Projects to Upgrade Your Home on a Budget',
        image: '/images/10-easy-diy-projects.webp',
        excerpt: 'Upgrade your home with 10 beginner-friendly DIY projects on a budget.',
        date: '2025-02-05',
    },
    {
        slug: 'beginning-wood-working',
        category: 'diy-project',
        title: 'Beginner Woodworking Projects Anyone Can Try',
        image: '/images/beginner-woodworking-projects.webp',
        excerpt: 'Start woodworking with beginner-friendly projects and simple tools.',
        date: '2025-02-07',
    },
    {
        slug: 'raised-bed-garden',
        category: 'diy-project',
        title: 'How to Build a Raised Garden Bed Yourself',
        image: '/images/raised-garden-bed.webp',
        excerpt: 'Build a raised garden bed step by step, even as a beginner.',
        date: '2025-02-09',
    },
    {
        slug: 'diy-wall-art-ideas',
        category: 'diy-project',
        title: 'DIY Wall Art Ideas That Look Professionally Made',
        image: '/images/diy-article-wall-art-ideas.webp',
        excerpt: 'Create DIY wall art that looks like it came from a designer showroom.',
        date: '2025-02-11',
    },
    {
        slug: 'old-furniture',
        category: 'diy-project',
        title: 'How to Repurpose Old Furniture into Something New',
        image: '/images/repurpose-old-furniture.webp',
        excerpt: 'Turn old furniture into beautiful, functional new pieces.',
        date: '2025-02-13',
    },
    {
        slug: 'christmas-ornaments',
        category: 'diy-project',
        title: 'How to Make Your Own Christmas Ornaments',
        image: '/images/your-own-christmas-ornaments.webp',
        excerpt: 'Make your own personalized Christmas ornaments for the holidays.',
        date: '2025-02-15',
    },
    {
        slug: 'build-floating-shelves-easy-diy-guide-for-beginners',
        category: 'diy-project',
        title: 'Build Floating Shelves: Easy DIY Guide for Beginners',
        image: '/images/floating-shelves.webp',
        excerpt: 'Floating shelves are one of the best DIY upgrades you can add to your home. They look modern, save space, and provide a stylish way to display decor.',
        date: '2025-05-26',
    },
    {
        slug: 'wooden-planter-box-diy-easy-build-for-your-home-garden',
        category: 'diy-project',
        title: 'Wooden Planter Box DIY: Easy Build for Your Home Garden',
        image: '/images/wooden-planter.webp',
        excerpt: 'A wooden planter box is one of the best DIY projects for anyone who wants to upgrade their outdoor space. It adds beauty to patios and balconies.',
        date: '2025-05-28',
    },
    {
        slug: 'diy-garden-path-ideas-build-a-beautiful-walkway-easily',
        category: 'diy-project',
        title: 'DIY Garden Path Ideas: Build a Beautiful Walkway Easily',
        image: '/images/diy-garden.webp',
        excerpt: 'A garden looks more organized and attractive when it has a clean walking path. Learn how to build a beautiful walkway easily.',
        date: '2025-05-30',
    },
    // New DIY Project posts

    // Gardening
    {
        slug: 'first-home-garden',
        category: 'gardening',
        title: 'Gardening for Beginners: How to Start Your First Home Garden',
        image: '/images/first-home-garden.webp',
        excerpt: 'Start your first home garden with simple steps and beginner tips.',
        date: '2025-02-17',
    },
    {
        slug: 'indoor-plant-alive',
        category: 'gardening',
        title: 'How to Keep Indoor Plants Alive and Thriving',
        image: '/images/indoor-plants-alive.webp',
        excerpt: 'Keep indoor plants healthy and thriving with these proven tips.',
        date: '2025-02-19',
    },
    {
        slug: 'small-garden',
        category: 'gardening',
        title: 'Small Garden Ideas for Limited Outdoor Space',
        image: '/images/small-garden-ideas.webp',
        excerpt: 'Creative small garden ideas for tiny backyards and balconies.',
        date: '2025-02-21',
    },
    {
        slug: 'spring-gardening',
        category: 'gardening',
        title: 'Spring Gardening Tips for a Healthy Start',
        image: '/images/spring-gardening-tips.webp',
        excerpt: 'Get your garden off to a healthy start with key spring tasks.',
        date: '2025-02-23',
    },
    {
        slug: 'control-garden',
        category: 'gardening',
        title: 'How to Control Garden Pests Naturally',
        image: '/images/control-garden-pets.webp',
        excerpt: 'Control garden pests naturally with eco-friendly methods.',
        date: '2025-02-25',
    },
    {
        slug: 'herb-garden',
        category: 'gardening',
        title: 'How to Create an Herb Garden in Your Kitchen',
        image: '/images/herb-garden-in-kitchen.webp',
        excerpt: 'Create a fresh herb garden right in your kitchen.',
        date: '2025-02-27',
    },
    // New Gardening posts
    {
        slug: 'gardening-mistakes-to-avoid',
        category: 'gardening',
        title: 'Gardening Mistakes to Avoid for a Healthy Garden',
        image: '/images/gardening-mistakes.webp',
        excerpt: 'Avoid common gardening mistakes with simple tips on watering, soil care, sunlight, and plant selection.',
        date: '2025-05-01',
    },
    {
        slug: 'watering-plants',
        category: 'gardening',
        title: 'Watering Plants: Simple Guide for Healthy Growth',
        image: '/images/watering-plants.webp',
        excerpt: 'Learn the best tips for watering plants the right way, including timing, amount, and common mistakes.',
        date: '2025-05-03',
    },
    {
        slug: 'low-maintenance-garden',
        category: 'gardening',
        title: 'Low Maintenance Garden Ideas for a Beautiful Outdoor Space',
        image: '/images/garden-ideas-for-out-door-space.webp',
        excerpt: 'Create a low maintenance garden with easy plants, smart design, and simple care tips.',
        date: '2025-05-05',
    },

    // Home Decor
    {
        slug: 'small-living-room',
        category: 'home-decor',
        title: 'How to Make a Small Living Room Look Bigger and Brighter',
        image: '/images/small-living-room.webp',
        excerpt: 'Design tricks to make a small living room feel bigger and brighter.',
        date: '2025-03-01',
    },
    {
        slug: 'small-bedroom-decor',
        category: 'home-decor',
        title: 'Small Bedroom Decor Ideas That Actually Work in Your Home',
        image: '/images/bedroom-decor.webp',
        excerpt: 'Practical small bedroom decor ideas that really work.',
        date: '2025-03-03',
    },
    {
        slug: 'decorate-small-kitchen',
        category: 'home-decor',
        title: 'How to Decorate a Small Kitchen Without Losing Space',
        image: '/images/decorate-a-small-kitchen.webp',
        excerpt: 'Decorate a small kitchen without sacrificing storage or function.',
        date: '2025-03-05',
    },
    {
        slug: 'easy-spring-home',
        category: 'home-decor',
        title: 'Easy Spring Home Decor Updates for a Fresh Look',
        image: '/images/spring-home-decor.webp',
        excerpt: 'Refresh your home for spring with easy decor updates.',
        date: '2025-03-07',
    },
    {
        slug: 'diy-wall-art',
        category: 'home-decor',
        title: 'DIY Wall Art Ideas That Look Professionally Made',
        image: '/images/diy-wall-art-ideas.webp',
        excerpt: 'DIY wall art projects that look like professional pieces.',
        date: '2025-03-09',
    },
    {
        slug: 'interior-design-style',
        category: 'home-decor',
        title: 'How to Find Your Interior Design Style',
        image: '/images/interior-design-style.webp',
        excerpt: 'Discover and define your personal interior design style.',
        date: '2025-03-11',
    },
    // New Home Decor articles
    {
        slug: 'modern-living-room-colors',
        category: 'home-decor',
        title: 'Modern Living Room Color Combinations That Look Stylish',
        image: '/images/modern-living-room-color-combinations.webp',
        excerpt: 'Discover modern living room color combinations that create a stylish, balanced, and welcoming space using timeless shades and trendy accents.',
        date: '2025-05-10',
    },
    {
        slug: 'relaxing-bedroom-ideas',
        category: 'home-decor',
        title: 'Relaxing Bedroom Ideas: Create a Calm and Cozy Space',
        image: '/images/relaxing-bedroom-ideas.webp',
        excerpt: 'Create a relaxing bedroom with calming colors, soft lighting, cozy textures, and smart layout ideas that help you unwind and sleep better.',
        date: '2025-05-12',
    },
    {
        slug: 'kitchen-wall-decor-ideas',
        category: 'home-decor',
        title: 'Kitchen Wall Decor Ideas to Make Your Kitchen Look Stunning',
        image: '/images/kitchen-wall-decor-ideas.webp',
        excerpt: 'Upgrade your space with Kitchen Wall Decor ideas that add style, warmth, and personality using art, shelves, colors, and smart layouts for any kitchen.',
        date: '2025-05-14',
    },

    // Real Estate (placeholder examples – fill with your real posts)
    {
        slug: 'budget-home-maintenance',
        category: 'real-estate',
        title: 'Budget Home Maintenance Tips for New Homeowners',
        image: '/images/budget-for-home-maintenace.webp',
        excerpt: 'Simple home maintenance tips to protect your investment on a budget.',
        date: '2025-03-13',
    },
    {
        slug: 'ready-buy-home',
        category: 'real-estate',
        title: 'How to Know You Are Ready to Buy a Home',
        image: '/images/you-are-ready-to-buy-home.webp',
        excerpt: 'Key signs that you are financially and emotionally ready to buy a home.',
        date: '2025-03-15',
    },
    {
        slug: 'real-estate-investing',
        category: 'real-estate',
        title: 'Real Estate Investing Basics for Beginners',
        image: '/images/real-estste-investing.webp',
        excerpt: 'Understand the basics of real estate investing as a beginner.',
        date: '2025-03-17',
    },
    // New Real Estate posts
    {
        slug: 'buyer-seller-market',
        category: 'real-estate',
        title: 'Buyer’s vs. Seller’s Market: What’s the Difference?',
        image: '/images/buyers-market.webp',
        excerpt: 'Understand key differences between a buyer’s and seller’s market before you move.',
        date: '2025-04-07',
    },
    {
        slug: 'plan-smooth-relocation',
        category: 'real-estate',
        title: 'How to Plan a Smooth Relocation to a New City',
        image: '/images/plan-a-smooth-relocation.webp',
        excerpt: 'Plan a smooth relocation with checklists, packing tips, and moving-day strategies.',
        date: '2025-04-09',
    },
    {
        slug: 'prepare-your-home',
        category: 'real-estate',
        title: 'How to Prepare Your Home for a Quick Sale',
        image: '/images/prepare-home-for-market.webp',
        excerpt: 'Stage and prepare your home so it sells faster and for a better price.',
        date: '2025-04-11',
    },
    

    {
        slug: 'buying-older-home',
        category: 'real-estate',
        title: 'Buying Older Home: Complete Guide for Smart Home Buyers',
        image: '/images/buying-older-home.webp',
        excerpt: 'Thinking about buying an older home? Learn key benefits, hidden risks, inspection tips, and smart buying steps to make a safe and confident decision.',
        date: '2025-05-26',
    },
    {
        slug: 'homes-curb-appeal',
        category: 'real-estate',
        title: 'Home\'s Curb Appeal: Easy Ways to Make Your Home Look Better',
        image: '/images/home-scurb-appeal.webp',
        excerpt: 'Boost your home\'s curb appeal with simple exterior upgrades, clean landscaping, lighting, and entryway tips that increase beauty and home value.',
        date: '2025-05-28',
    },
    {
        slug: 'location-affects-property-value',
        category: 'real-estate',
        title: 'How Location Affects Property Value: Complete Real Estate Guide',
        image: '/images/location-affect.webp',
        excerpt: 'Learn how location affects property value with key factors like schools, safety, transport, amenities, and future development that boost home prices.',
        date: '2025-05-30',
    },
];

function getLatestPosts(limit = 9) {
    return [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

function getLatestByCategory(category, limit = 3) {
    return posts
        .filter((p) => p.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

module.exports = {
    posts,
    getLatestPosts,
    getLatestByCategory,
};

