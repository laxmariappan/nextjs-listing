export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  tags: string[];
}

export const products: Product[] = [
  { id: 1, name: "Smartphone X", category: "Electronics", price: 799.99, tags: ["tech", "mobile"] },
  { id: 2, name: "Laptop Pro", category: "Electronics", price: 1299.99, tags: ["tech", "computer"] },
  { id: 3, name: "Running Shoes", category: "Sports", price: 89.99, tags: ["footwear", "fitness"] },
  { id: 4, name: "Coffee Maker", category: "Home", price: 49.99, tags: ["kitchen", "appliance"] },
  { id: 5, name: "Yoga Mat", category: "Sports", price: 29.99, tags: ["fitness", "exercise"] },
  { id: 6, name: "Wireless Earbuds", category: "Electronics", price: 129.99, tags: ["tech", "audio"] },
  { id: 7, name: "Blender", category: "Home", price: 39.99, tags: ["kitchen", "appliance"] },
  { id: 8, name: "Desk Lamp", category: "Home", price: 24.99, tags: ["lighting", "office"] },
  { id: 9, name: "Backpack", category: "Fashion", price: 59.99, tags: ["bag", "travel"] },
  { id: 10, name: "Smart Watch", category: "Electronics", price: 199.99, tags: ["tech", "wearable"] },
  { id: 11, name: "Dumbbell Set", category: "Sports", price: 79.99, tags: ["fitness", "exercise"] },
  { id: 12, name: "Wireless Mouse", category: "Electronics", price: 29.99, tags: ["tech", "computer"] },
  { id: 13, name: "Air Purifier", category: "Home", price: 149.99, tags: ["appliance", "health"] },
  { id: 14, name: "Sunglasses", category: "Fashion", price: 89.99, tags: ["accessories", "summer"] },
  { id: 15, name: "Portable Charger", category: "Electronics", price: 39.99, tags: ["tech", "mobile"] },
];