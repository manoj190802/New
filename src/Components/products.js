// Import all images for products
// Using placeholders if specific ones aren't available but I'll try to map existing ones.

import activewear1 from '../Assets/Activewearimg/actimage.png';
import activewear2 from '../Assets/Activewearimg/actimg1.png';
// ... other imports

export const products = [
  {
    id: 1,
    category: 'activewear',
    name: 'Men Solid Athleisure Joggers',
    price: '₹599',
    image: activewear1,
    description: 'Comfortable and stylish joggers for your workout sessions.'
  },
  {
    id: 2,
    category: 'activewear',
    name: 'Men Solid Athleisure Shorts',
    price: '₹499',
    image: activewear2,
    description: 'Lightweight shorts for maximum mobility.'
  },
  // Add more products with unique IDs
  {
    id: 101,
    category: 'mens',
    name: 'Casual Cotton Shirt',
    price: '₹799',
    image: '../Assets/cart1.png', // Fallback path if imports are messy
    description: 'Breathable cotton shirt for everyday wear.'
  },
  {
    id: 201,
    category: 'womens',
    name: 'Floral Summer Dress',
    price: '₹1299',
    image: '../Assets/women1.png',
    description: 'Elegant floral dress for summer outings.'
  }
];

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};
