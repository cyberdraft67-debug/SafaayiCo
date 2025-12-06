import { Product } from './types';

export const WHATSAPP_NUMBER = "923332820021"; // Pakistan code +92
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const DELIVERY_CHARGE = 50;

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ultra-Soft Facial Tissues',
    description: 'Gentle on skin, highly absorbent 2-ply tissues.',
    longDescription: 'Experience premium comfort with our Ultra-Soft Facial Tissues. Made from 100% virgin pulp, these 2-ply tissues are designed to be gentle on sensitive skin while offering superior strength and absorbency. Free from harmful bleaching agents.',
    image: 'https://image.pollinations.ai/prompt/white%20facial%20tissue%20box%20isolated%20on%20white%20background%20studio%20product%20photography%20high%20quality?width=600&height=450&nologo=true',
    features: ['100% Virgin Pulp', '2-Ply Strength', 'Hypoallergenic', 'Zero Fluorescent Agents'],
    options: [
      { label: 'Single Box (150 pulls)', price: 280 },
      { label: 'Family Pack (3 Boxes)', price: 600 },
      { label: 'Carton (12 Boxes)', price: 2000 }
    ]
  },
  {
    id: 'p2',
    name: 'Heavy-Duty Garbage Bags',
    description: 'Leak-proof and tear-resistant garbage bags.',
    longDescription: 'Keep your home hygienic with our Heavy-Duty Garbage Bags. Engineered to resist tears and leaks, these bags are perfect for kitchen waste, heavy trash, and general organization. Features a strong drawstring for easy closure and disposal.',
    image: 'https://image.pollinations.ai/prompt/roll%20of%20black%20plastic%20garbage%20bags%20isolated%20on%20white%20background%20studio%20product%20photography?width=600&height=450&nologo=true',
    features: ['Leak-Proof Technology', 'Tear Resistant', 'Odor Control', 'Recyclable Material'],
    options: [
      { label: 'Small (Roll of 30)', price: 450 },
      { label: 'Large (Roll of 20)', price: 450 },
      { label: 'Extra Large (Roll of 15)', price: 500 }
    ]
  },
  {
    id: 'p3',
    name: 'Zip-Lock Storage Bags',
    description: 'Airtight seal to keep food fresh longer.',
    longDescription: 'Preserve the freshness of your food with our premium Zip-Lock Storage Bags. Made from food-grade, BPA-free material with a double-seal zipper technology that locks out air and moisture. freezer-safe and reusable.',
    image: 'https://image.pollinations.ai/prompt/box%20of%20clear%20ziplock%20bags%20and%20one%20bag%20with%20vegetables%20isolated%20on%20white%20background%20product%20photography?width=600&height=450&nologo=true',
    features: ['Double-Seal Zipper', 'BPA-Free', 'Freezer Safe', 'Reusable'],
    options: [
      { label: 'Small - Snack Size (25 bags)', price: 350 },
      { label: 'Medium - Sandwich Size (20 bags)', price: 400 },
      { label: 'Large - Gallon Size (15 bags)', price: 450 }
    ]
  },
  {
    id: 'p4',
    name: 'Premium Aluminum Foil',
    description: 'Heavy-duty foil for grilling, baking, and storing.',
    longDescription: 'Our Premium Aluminum Foil is thick, durable, and perfect for all your cooking needs. Whether you are grilling, baking, or wrapping leftovers, it locks in heat and moisture. Tear-resistant and heat-safe.',
    image: 'https://image.pollinations.ai/prompt/roll%20of%20silver%20aluminum%20foil%20kitchen%20product%20photography%20isolated%20white%20background?width=600&height=450&nologo=true',
    features: ['Heat Retention', 'Extra Thick', 'Food Grade', 'Easy Tear Edge'],
    options: [
      { label: 'Standard Roll (10 meters)', price: 550 },
      { label: 'Mega Roll (25 meters)', price: 1050 },
      { label: 'Catering Pack (75 meters)', price: 2300 }
    ]
  },
  {
    id: 'p5',
    name: 'Cling Wrap Food Saver',
    description: 'Crystal clear wrap that clings tight to seal freshness.',
    longDescription: 'Keep your fruits, vegetables, and leftovers fresh for longer with our ultra-clear Cling Wrap. It stretches and clings tight to any surface, creating an airtight seal that prevents spoilage and odor transfer.',
    image: 'https://image.pollinations.ai/prompt/roll%20of%20clear%20plastic%20food%20wrap%20cling%20film%20isolated%20on%20white%20background%20product%20photography?width=600&height=450&nologo=true',
    features: ['Superior Stretch', 'BPA-Free', 'Microwave Safe', 'Crystal Clear'],
    options: [
      { label: 'Home Roll (30 meters)', price: 400 },
      { label: 'Chef Roll (100 meters)', price: 950 },
      { label: 'Commercial Roll (300 meters)', price: 2200 }
    ]
  },
  {
    id: 'p6',
    name: 'Soft Toilet Rolls',
    description: '3-ply ultra-soft and absorbent toilet tissue.',
    longDescription: 'Experience the ultimate softness with our 3-Ply Toilet Rolls. Designed for comfort and hygiene, they are highly absorbent and flushable. Free from harsh chemicals and septic-safe.',
    image: 'https://image.pollinations.ai/prompt/stack%20of%20white%20toilet%20paper%20rolls%20product%20photography%20minimalist%20isolated?width=600&height=450&nologo=true',
    features: ['3-Ply Comfort', 'Fast Dissolving', 'Septic Safe', 'No Added Fragrance'],
    options: [
      { label: 'Pack of 4 Rolls', price: 580 },
      { label: 'Pack of 12 Rolls', price: 1450 },
      { label: 'Family Bundle (24 Rolls)', price: 2700 }
    ]
  },
  {
    id: 'p7',
    name: 'Disposable Paper Cups',
    description: 'Eco-friendly hot/cold cups for everyday use.',
    longDescription: 'Perfect for parties, offices, or home use. Our Disposable Paper Cups are sturdy, leak-proof, and suitable for both hot coffee and cold drinks. Made from sustainable paper sources.',
    image: 'https://image.pollinations.ai/prompt/stack%20of%20white%20paper%20coffee%20cups%20disposable%20product%20photography%20isolated?width=600&height=450&nologo=true',
    features: ['Leak-Proof Lining', 'Hot & Cold Safe', 'Eco-Friendly', 'Sturdy Grip'],
    options: [
      { label: 'Pack of 50 (Small 6oz)', price: 450 },
      { label: 'Pack of 50 (Large 8oz)', price: 550 },
      { label: 'Office Pack (100 Large)', price: 950 }
    ]
  }
];

export const FOUNDER_INFO = {
  name: "Umar",
  role: "Founder & CEO",
  location: "Karachi, Pakistan",
  bio: "Ensuring every household has access to safe, high-quality daily essentials that carry zero health risk."
};