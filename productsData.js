// Generates a small, self-contained SVG "leaf" thumbnail as a data URI so the
// app never depends on external image hosting. Each plant gets its own
// accent color so the grid still reads as visually distinct products.
function leafThumbnail(bgColor, leafColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect width="200" height="200" rx="16" fill="${bgColor}"/>
      <path d="M100 40 C60 60 50 110 100 160 C150 110 140 60 100 40 Z" fill="${leafColor}"/>
      <path d="M100 55 L100 150" stroke="${bgColor}" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const productsData = [
  // ---- Air Purifying Plants ----
  {
    id: 'snake-plant',
    category: 'Air Purifying Plants',
    name: 'Snake Plant',
    price: 18,
    image: leafThumbnail('#0F3D2E', '#5FBF8C'),
  },
  {
    id: 'spider-plant',
    category: 'Air Purifying Plants',
    name: 'Spider Plant',
    price: 14,
    image: leafThumbnail('#123524', '#7ED6A5'),
  },
  {
    id: 'peace-lily',
    category: 'Air Purifying Plants',
    name: 'Peace Lily',
    price: 22,
    image: leafThumbnail('#0D2E22', '#4CAF7D'),
  },
  {
    id: 'boston-fern',
    category: 'Air Purifying Plants',
    name: 'Boston Fern',
    price: 16,
    image: leafThumbnail('#153B2A', '#68C48A'),
  },
  {
    id: 'rubber-plant',
    category: 'Air Purifying Plants',
    name: 'Rubber Plant',
    price: 25,
    image: leafThumbnail('#102E22', '#3F9E6C'),
  },
  {
    id: 'aloe-vera',
    category: 'Air Purifying Plants',
    name: 'Aloe Vera',
    price: 12,
    image: leafThumbnail('#12362A', '#79D19B'),
  },

  // ---- Aromatic Fragrant Plants ----
  {
    id: 'lavender',
    category: 'Aromatic Fragrant Plants',
    name: 'Lavender',
    price: 15,
    image: leafThumbnail('#33234D', '#B79CE8'),
  },
  {
    id: 'jasmine',
    category: 'Aromatic Fragrant Plants',
    name: 'Jasmine',
    price: 20,
    image: leafThumbnail('#2E2148', '#C9AEF0'),
  },
  {
    id: 'rosemary',
    category: 'Aromatic Fragrant Plants',
    name: 'Rosemary',
    price: 13,
    image: leafThumbnail('#372757', '#A98EE0'),
  },
  {
    id: 'mint',
    category: 'Aromatic Fragrant Plants',
    name: 'Mint',
    price: 10,
    image: leafThumbnail('#2A1E43', '#9F86D6'),
  },
  {
    id: 'basil',
    category: 'Aromatic Fragrant Plants',
    name: 'Basil',
    price: 11,
    image: leafThumbnail('#3A2A5C', '#B49AE6'),
  },
  {
    id: 'eucalyptus',
    category: 'Aromatic Fragrant Plants',
    name: 'Eucalyptus',
    price: 19,
    image: leafThumbnail('#2F2250', '#AE93E3'),
  },

  // ---- Low-Maintenance Plants ----
  {
    id: 'zz-plant',
    category: 'Low-Maintenance Plants',
    name: 'ZZ Plant',
    price: 24,
    image: leafThumbnail('#4A3512', '#E3B15C'),
  },
  {
    id: 'pothos',
    category: 'Low-Maintenance Plants',
    name: 'Pothos',
    price: 14,
    image: leafThumbnail('#42300F', '#DDA84F'),
  },
  {
    id: 'succulent-mix',
    category: 'Low-Maintenance Plants',
    name: 'Succulent Mix',
    price: 17,
    image: leafThumbnail('#3E2C0E', '#E6BB6E'),
  },
  {
    id: 'cast-iron-plant',
    category: 'Low-Maintenance Plants',
    name: 'Cast Iron Plant',
    price: 21,
    image: leafThumbnail('#4A3714', '#E0AC55'),
  },
  {
    id: 'chinese-money-plant',
    category: 'Low-Maintenance Plants',
    name: 'Chinese Money Plant',
    price: 16,
    image: leafThumbnail('#453210', '#DCAA52'),
  },
  {
    id: 'haworthia',
    category: 'Low-Maintenance Plants',
    name: 'Haworthia',
    price: 13,
    image: leafThumbnail('#3D2C0F', '#E4B865'),
  },
];

export const categories = [
  'Air Purifying Plants',
  'Aromatic Fragrant Plants',
  'Low-Maintenance Plants',
];
