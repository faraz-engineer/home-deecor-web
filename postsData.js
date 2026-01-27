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
        slug: 'pet-friendly-cleaning-tips',
        category: 'cleaning',
        title: 'Pet-Friendly Cleaning Tips for a Fresh Home',
        image: '/images/pet-friendly-cleaning-tips.webp',
        excerpt: 'Keep your home clean and safe for pets with simple, pet-friendly cleaning tips.',
        date: '2025-03-19',
    },
    {
        slug: 'deep-clean-checklist',
        category: 'cleaning',
        title: 'Whole-House Deep Clean Checklist You Can Follow in a Weekend',
        image: '/images/deep-clean-checklist.webp',
        excerpt: 'Use this room-by-room deep cleaning checklist to reset your entire home in one weekend.',
        date: '2025-03-21',
    },
    {
        slug: 'organize-entryway',
        category: 'cleaning',
        title: 'How to Organize a Busy Entryway Once and For All',
        image: '/images/organize-entryway.webp',
        excerpt: 'Tame shoe piles, bags, and clutter with smart entryway organizing ideas.',
        date: '2025-03-23',
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
    // New DIY Project posts
    {
        slug: 'diy-entryway-bench',
        category: 'diy-project',
        title: 'How to Build a DIY Entryway Bench with Storage',
        image: '/images/diy-entryway-bench.webp',
        excerpt: 'Build a simple entryway bench with hidden storage for shoes, bags, and more.',
        date: '2025-03-25',
    },
    {
        slug: 'accent-wall-ideas',
        category: 'diy-project',
        title: 'DIY Accent Wall Ideas That Transform Any Room',
        image: '/images/accent-wall-ideas.webp',
        excerpt: 'From paint to paneling, try these DIY accent wall ideas to instantly transform a room.',
        date: '2025-03-27',
    },
    {
        slug: 'outdoor-pallet-furniture',
        category: 'diy-project',
        title: 'How to Build Outdoor Pallet Furniture for Your Patio',
        image: '/images/outdoor-pallet-furniture.webp',
        excerpt: 'Create budget-friendly outdoor pallet furniture for a cozy patio or balcony.',
        date: '2025-03-29',
    },

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
        slug: 'container-gardening',
        category: 'gardening',
        title: 'Container Gardening Ideas for Small Balconies',
        image: '/images/container-gardening.webp',
        excerpt: 'Grow flowers, herbs, and veggies in containers—even on the smallest balcony.',
        date: '2025-03-31',
    },
    {
        slug: 'low-maintenance-plants',
        category: 'gardening',
        title: 'Low-Maintenance Plants You Can’t Kill Easily',
        image: '/images/low-maintenance-plants.webp',
        excerpt: 'Choose low-maintenance plants that thrive with minimal care indoors or outdoors.',
        date: '2025-04-02',
    },
    {
        slug: 'kids-garden-projects',
        category: 'gardening',
        title: 'Fun Garden Projects to Do with Kids',
        image: '/images/kids-garden-projects.webp',
        excerpt: 'Simple, fun garden projects that get kids excited about growing plants.',
        date: '2025-04-04',
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
        image: '/images/living-room-colors.webp',
        excerpt: 'Discover modern living room color combinations that create a stylish, balanced, and welcoming space using timeless shades and trendy accents.',
        date: '2025-05-10',
    },
    {
        slug: 'relaxing-bedroom-ideas',
        category: 'home-decor',
        title: 'Relaxing Bedroom Ideas: Create a Calm and Cozy Space',
        image: '/images/relaxing-bedroom.webp',
        excerpt: 'Create a relaxing bedroom with calming colors, soft lighting, cozy textures, and smart layout ideas that help you unwind and sleep better.',
        date: '2025-05-12',
    },
    {
        slug: 'kitchen-wall-decor-ideas',
        category: 'home-decor',
        title: 'Kitchen Wall Decor Ideas to Make Your Kitchen Look Stunning',
        image: '/images/kitchen-wall-decor.webp',
        excerpt: 'Upgrade your space with Kitchen Wall Decor ideas that add style, warmth, and personality using art, shelves, colors, and smart layouts for any kitchen.',
        date: '2025-05-14',
    },

    // Real Estate (placeholder examples – fill with your real posts)
    {
        slug: 'budget-home-maintenance',
        category: 'real-estate',
        title: 'Budget Home Maintenance Tips for New Homeowners',
        image: '/images/budget-home-maintenance.webp',
        excerpt: 'Simple home maintenance tips to protect your investment on a budget.',
        date: '2025-03-13',
    },
    {
        slug: 'ready-buy-home',
        category: 'real-estate',
        title: 'How to Know You Are Ready to Buy a Home',
        image: '/images/ready-buy-home.webp',
        excerpt: 'Key signs that you are financially and emotionally ready to buy a home.',
        date: '2025-03-15',
    },
    {
        slug: 'real-estate-investing',
        category: 'real-estate',
        title: 'Real Estate Investing Basics for Beginners',
        image: '/images/real-estate-investing.webp',
        excerpt: 'Understand the basics of real estate investing as a beginner.',
        date: '2025-03-17',
    },
    // New Real Estate posts
    {
        slug: 'buyer-seller-market',
        category: 'real-estate',
        title: 'Buyer’s vs. Seller’s Market: What’s the Difference?',
        image: '/images/buyer-seller-market.webp',
        excerpt: 'Understand key differences between a buyer’s and seller’s market before you move.',
        date: '2025-04-07',
    },
    {
        slug: 'plan-smooth-relocation',
        category: 'real-estate',
        title: 'How to Plan a Smooth Relocation to a New City',
        image: '/images/plan-smooth-relocation.webp',
        excerpt: 'Plan a smooth relocation with checklists, packing tips, and moving-day strategies.',
        date: '2025-04-09',
    },
    {
        slug: 'prepare-your-home',
        category: 'real-estate',
        title: 'How to Prepare Your Home for a Quick Sale',
        image: '/images/prepare-your-home.webp',
        excerpt: 'Stage and prepare your home so it sells faster and for a better price.',
        date: '2025-04-11',
    },
    {
        slug: 'home-appraisal-guide',
        category: 'real-estate',
        title: 'Home Appraisal Guide: What Sellers Need to Know',
        image: '/images/home-appraisal-guide.webp',
        excerpt: 'Learn how home appraisals work and how to prepare your property for the best value.',
        date: '2025-04-13',
    },
    {
        slug: 'first-time-landlord-tips',
        category: 'real-estate',
        title: 'Essential Tips for First-Time Landlords',
        image: '/images/first-time-landlord-tips.webp',
        excerpt: 'Start your rental property journey with these essential tips for first-time landlords.',
        date: '2025-04-15',
    },
    {
        slug: 'understanding-mortgage-rates',
        category: 'real-estate',
        title: 'Understanding Mortgage Rates: A Guide for Buyers',
        image: '/images/mortgage-rates-guide.webp',
        excerpt: 'Everything you need to know about how mortgage rates are determined and how they affect you.',
        date: '2025-04-17',
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

