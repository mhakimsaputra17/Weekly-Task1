const product = {
  name: "Macbook Pro 2018",
  rating: 4.9,
  price: 8150000,
  isActive: true,
  images: [
    "https://unsplash.com/macbook-1.jpg",
    "https://unsplash.com/macbook-2.jpg",
    "https://unsplash.com/macbook-3.jpg",
    "https://unsplash.com/macbook-4.jpg",
    "https://unsplash.com/macbook-5.jpg",
  ],
  description: `
SPESIFIKASI:
- Processor: Intel Core i5 2.3GHz Quad-core
- Graphics: Intel Iris Plus Graphics 655
- Resolusi: 2560x1600
- Ports: Thunderbolt USB Type-C
- Keyboard: US
- Wifi Connection
- Photo Booth Support
- Audio Jack Port
- Display: 13-inch
- Operating System: MacOS Monterey/Request
`,
  variants: {
    name: "Macbook Pro 2018",
    options: [
      "RAM 16 SSD 512 GB",
      "RAM 16 SSD 256 GB",
      "RAM 8 SSD 512 GB",
      "RAM 8 SSD 256 GB",
    ],
  },
  storeName: "Laptop it Up",
};

console.log(product);
