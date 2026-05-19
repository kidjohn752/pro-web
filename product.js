const initialProducts = [
    // --- ORIGINAL 40 PRODUCTS ---
    // Electronics
    { id: 1, name: 'Sony WH-1000XM5', category: 'electronics', price: 348.99, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600', description: 'Industry-leading noise canceling headphones.' },
    { id: 2, name: 'Apple Watch Ultra', category: 'electronics', price: 799.00, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', description: 'Rugged and capable smartwatch for extreme environments.' },
    { id: 3, name: 'MacBook Pro M3', category: 'electronics', price: 1599.00, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600', description: 'Mind-blowing speed with the latest Apple silicon.' },
    { id: 4, name: 'Keychron K2 Keyboard', category: 'electronics', price: 89.99, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600', description: 'Wireless mechanical keyboard for mac and windows.' },
    { id: 5, name: 'Samsung 49" Odyssey', category: 'electronics', price: 1199.99, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600', description: 'Ultra-wide gaming monitor with 240Hz refresh rate.' },
    { id: 6, name: 'Logitech MX Master 3S', category: 'electronics', price: 99.99, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600', description: 'Ergonomic wireless mouse with ultra-fast scrolling.' },
    { id: 7, name: 'iPad Air 5th Gen', category: 'electronics', price: 599.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600', description: 'Light, bright, and full of might with the M1 chip.' },
    { id: 8, name: 'GoPro HERO12 Black', category: 'electronics', price: 399.99, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600', description: 'Waterproof action camera with 5.3K60 video.' },
    { id: 9, name: 'Bose Smart Soundbar', category: 'electronics', price: 499.00, image: 'https://images.unsplash.com/photo-1546484396-fb3fade47ea0?w=600', description: 'Premium Dolby Atmos soundbar for your TV.' },
    { id: 10, name: 'DJI Mini 3 Pro', category: 'electronics', price: 759.00, image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600', description: 'Lightweight and foldable camera drone with 4K HDR.' },

    // Fashion
    { id: 11, name: 'Nike Air Force 1', category: 'fashion', price: 110.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600', description: 'The classic everyday sneaker that never goes out of style.' },
    { id: 12, name: 'Vintage Leather Jacket', category: 'fashion', price: 250.00, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', description: 'Genuine distressed leather for a rugged look.' },
    { id: 13, name: 'Ray-Ban Aviators', category: 'fashion', price: 160.00, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600', description: 'Iconic sunglasses with UV protection.' },
    { id: 14, name: 'Minimalist Tote Bag', category: 'fashion', price: 45.00, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600', description: 'Spacious canvas tote for everyday errands.' },
    { id: 15, name: 'Automatic Dive Watch', category: 'fashion', price: 495.00, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600', description: 'Water-resistant up to 200m with a steel bracelet.' },
    { id: 16, name: 'Cashmere Scarf', category: 'fashion', price: 85.00, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600', description: 'Ultra-soft winter scarf woven in Italy.' },
    { id: 17, name: 'Denim Trucker Jacket', category: 'fashion', price: 90.00, image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600', description: 'Classic blue denim jacket with a tailored fit.' },
    { id: 18, name: 'Chelsea Boots', category: 'fashion', price: 135.00, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600', description: 'Suede leather boots suitable for smart-casual wear.' },
    { id: 19, name: 'Polarized Wayfarers', category: 'fashion', price: 140.00, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600', description: 'Timeless frames reducing glare perfectly.' },
    { id: 20, name: 'Silk Sleep Mask', category: 'fashion', price: 25.00, image: 'https://images.unsplash.com/photo-1582216174776-90f6120e2eeb?w=600', description: 'Pure mulberry silk for uninterrupted beauty sleep.' },

    // Home
    { id: 21, name: 'Breville Espresso Machine', category: 'home', price: 699.95, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600', description: 'Barista-quality coffee directly in your kitchen.' },
    { id: 22, name: 'Dyson V15 Detect', category: 'home', price: 749.99, image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600', description: 'Cordless vacuum with laser dust detection.' },
    { id: 23, name: 'Herman Miller Chair', category: 'home', price: 1195.00, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600', description: 'Ergonomic office chair for all-day comfort.' },
    { id: 24, name: 'Linen Bedding Set', category: 'home', price: 210.00, image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600', description: 'Breathable stonewashed linen sheets and duvets.' },
    { id: 25, name: 'Le Creuset Dutch Oven', category: 'home', price: 350.00, image: 'https://images.unsplash.com/photo-1584990347449-a6ddfb9bdc43?w=600', description: 'Enameled cast iron perfect for slow cooking.' },
    { id: 26, name: 'Philips Hue Starter Kit', category: 'home', price: 129.00, image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600', description: 'Smart LED lighting system with millions of colors.' },
    { id: 27, name: 'Ceramic Table Lamp', category: 'home', price: 85.00, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600', description: 'Mid-century modern design with warm ambient light.' },
    { id: 28, name: 'Vitamix Blender', category: 'home', price: 450.00, image: 'https://images.unsplash.com/photo-1585237774136-189f76a6b10d?w=600', description: 'Professional-grade blending for smoothies and soups.' },
    { id: 29, name: 'Monstera Deliciosa', category: 'home', price: 45.00, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600', description: 'Live indoor plant to purify your air and add greenery.' },
    { id: 30, name: 'Aromatherapy Diffuser', category: 'home', price: 35.00, image: 'https://images.unsplash.com/photo-1608528577891-eb055848faaa?w=600', description: 'Ultrasonic essential oil diffuser with timer settings.' },

    // Sports
    { id: 31, name: 'Manduka PRO Yoga Mat', category: 'sports', price: 129.00, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600', description: 'Ultra-dense cushioning and lifetime warranty.' },
    { id: 32, name: 'Bowflex Adjustable Dumbbells', category: 'sports', price: 429.00, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600', description: 'Replaces 15 sets of weights in one compact design.' },
    { id: 33, name: 'Theragun Pro', category: 'sports', price: 599.00, image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=600', description: 'Deep muscle massage therapy for fast recovery.' },
    { id: 34, name: 'Hydro Flask 32 oz', category: 'sports', price: 44.95, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600', description: 'Vacuum insulated stainless steel water bottle.' },
    { id: 35, name: 'Garmin Edge 530', category: 'sports', price: 299.99, image: 'https://images.unsplash.com/photo-1520626337972-ebf863448a3e?w=600', description: 'Performance GPS cycling computer with mapping.' },
    { id: 36, name: 'Spalding Basketball', category: 'sports', price: 39.99, image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600', description: 'Official size and weight composite leather indoor/outdoor ball.' },
    { id: 37, name: 'TRX Suspension Trainer', category: 'sports', price: 169.95, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600', description: 'Complete bodyweight training system.' },
    { id: 38, name: 'Wilson Tennis Racket', category: 'sports', price: 249.00, image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600', description: 'Pro staff series engineered for precision and control.' },
    { id: 39, name: 'Speedo Swim Goggles', category: 'sports', price: 25.00, image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600', description: 'Anti-fog lenses with UV protection for competitive swimming.' },
    { id: 40, name: 'Camping Tent 4-Person', category: 'sports', price: 199.99, image: 'https://images.unsplash.com/photo-1504280741562-474d6cb58e80?w=600', description: 'Waterproof dome tent, sets up in under 5 minutes.' }
];

// Dynamically expanding to 104 products to save script weight while satisfying requirement
const extendedProducts = [];
const categoriesData = [
    { cat: 'electronics', keyword: 'gadget', items: ['Smart Thermostat', 'Wireless Earbuds', 'Portable Charger', 'Mechanical Switch Set', '4K Web Camera', 'Smart Ring', 'Desktop Mic', 'Gaming Mousepad', 'VR Headset', 'E-Reader', 'Smart Scale', 'Electric Toothbrush', 'Drone Propellers', 'USB-C Hub', 'Bluetooth Tracker', 'Smart Plug'] },
    { cat: 'fashion', keyword: 'clothing', items: ['Running Sneakers', 'Cotton T-Shirt', 'Wool Cardigan', 'Leather Belt', 'Silk Tie', 'Chino Pants', 'Winter Beanie', 'Gold Necklace', 'Silver Ring', 'Aviator Eyeglasses', 'Canvas Backpack', 'Crossbody Bag', 'Leather Wallet', 'Sports Bra', 'Athletic Socks', 'Windbreaker'] },
    { cat: 'home', keyword: 'furniture', items: ['Wooden Bookshelf', 'Velvet Throw Pillow', 'Scented Candle', 'Woven Basket', 'Coffee Table', 'Cast Iron Skillet', 'Dinnerware Set', 'Glass Vases', 'Area Rug', 'Bath Towel Set', 'Standing Mirror', 'Faux Olive Tree', 'Espresso Cups', 'Wall Art Canvas', 'Kitchen Knife Set', 'Storage Bins'] },
    { cat: 'sports', keyword: 'fitness', items: ['Jump Rope', 'Resistance Bands', 'Protein Shaker', 'Foam Roller', 'Gym Bag', 'Boxing Gloves', 'Kettlebell 15lb', 'Yoga Block', 'Cycling Helmet', 'Running Belt', 'Grip Strengthener', 'Pilates Ring', 'Agility Ladder', 'Ankle Weights', 'Swim Cap', 'Hiking Poles'] }
];

let globalIdCounter = 41;

categoriesData.forEach(catData => {
    catData.items.forEach((itemName, index) => {
        extendedProducts.push({
            id: globalIdCounter,
            name: itemName,
            category: catData.cat,
            price: Math.floor(Math.random() * 150) + 15.99,
            // using loremflickr to fetch a realistic image based on the category keyword and a unique lock ID
            image: `https://loremflickr.com/600/600/${catData.keyword}?lock=${globalIdCounter}`,
            description: `Premium quality ${itemName.toLowerCase()} perfect for your everyday needs.`
        });
        globalIdCounter++;
    });
});

// Final array containing 104 items total
const products = [...initialProducts, ...extendedProducts];