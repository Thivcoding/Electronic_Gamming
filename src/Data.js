export const menu_top = [
    {  name: "Home", link: "/" },
    {  name: "Shop", link: "/shop" },
    {  name: "Pages", link: "/pages" },
    {  name: "Blog", link: "/blog" },
];

export const menu_bottom = [
  { name: "HEADSETS", link: "/headsets" },
  { name: "KEYBOARDS", link: "/keyboards" },
  { name: "MOUSE", link: "/mouse" },
  { name: "GAMING CONTROLLERS", link: "/gaming-controllers" },
  { name: "MONITORS", link: "/monitors" },
  { name: "MICROPHONES", link: "/microphones" },
  { name: "POWER", link: "/power" },
  { name: "ACCESSORIES", link: "/accessories" },
  { name: "SALE", link: "/sale" }
];


import Gaming_controller from '../src/assets/Images/Gaming-controller.png'
import Gaming_mouse from '../src/assets/Images/Gaming-Mouse.png'
import Gaming_chairs from '../src/assets/Images/Gaming-Chairs.png'

export const Topcategories = [
  {
    id: 1,
    title1: "Gaming",
    title2: "Controllers",
    products: 17,
    image: Gaming_controller,
    link: "/controllers",
  },
  {
    id: 2,
    title1: "Gaming",
    title2: "Mouse",
    products: 16,
    image: Gaming_mouse,
    link: "/mouse",
  },
  {
    id: 3,
    title1: "Gaming",
    title2: "Chairs",
    products: 4,
    image: Gaming_chairs,
    link: "/chairs",
  },
  {
    id: 4,
    title1: "Gaming",
    title2: "Headsets",
    products: 29,
    // image: cate_4,
    link: "/headsets",
  },
  {
    id: 5,
    title1: "Keyboards",
    products: 9,
    // image: cate_5,
    link: "/keyboards",
  },
  {
    id: 6,
    title1: "Accessories",
    products: 27,
    // image: cate_6,
    link: "/accessories",
  },
];


export const categoriesAllInButton = [
  {
    id: "cpus",
    category: "CPUs",
    products: [
      { id: "cpu1", title: "Intel Core i7 12700K", priceOld: "$420", priceDiscount: "$380", image: "https://i.pinimg.com/1200x/38/50/5e/38505ea789aa30f175c54dcd7b8587b9.jpg" },
      { id: "cpu2", title: "AMD Ryzen 7 5800X", priceOld: "$390", priceDiscount: "$350", image: "https://example.com/images/cpu2.jpg" },
      { id: "cpu3", title: "Intel Core i9 13900K", priceOld: "$650", priceDiscount: "$599", image: "https://example.com/images/cpu3.jpg" },
      { id: "cpu4", title: "AMD Ryzen 9 5900X", priceOld: "$550", priceDiscount: "$499", image: "https://example.com/images/cpu4.jpg" },
      { id: "cpu5", title: "Intel Core i5 12400F", priceOld: "$220", priceDiscount: "$199", image: "https://example.com/images/cpu5.jpg" },
      { id: "cpu6", title: "AMD Ryzen 5 5600G", priceOld: "$250", priceDiscount: "$210", image: "https://example.com/images/cpu6.jpg" },
      { id: "cpu7", title: "Intel Core i3 12100", priceOld: "$150", priceDiscount: "$120", image: "https://example.com/images/cpu7.jpg" },
      { id: "cpu8", title: "AMD Ryzen 3 3300X", priceOld: "$180", priceDiscount: "$150", image: "https://example.com/images/cpu8.jpg" }
    ]
  },
  {
    id: "graphics_cards",
    category: "Graphics Cards",
    products: [
      { id: "gpu1", title: "NVIDIA GeForce RTX 4070", priceOld: "$650", priceDiscount: "$599", image: "https://example.com/images/gpu1.jpg" },
      { id: "gpu2", title: "AMD Radeon RX 6800 XT", priceOld: "$620", priceDiscount: "$570", image: "https://example.com/images/gpu2.jpg" },
      { id: "gpu3", title: "NVIDIA GeForce RTX 4090", priceOld: "$1600", priceDiscount: "$1499", image: "https://example.com/images/gpu3.jpg" },
      { id: "gpu4", title: "AMD Radeon RX 7900 XT", priceOld: "$950", priceDiscount: "$899", image: "https://example.com/images/gpu4.jpg" },
      { id: "gpu5", title: "NVIDIA GeForce RTX 3060 Ti", priceOld: "$450", priceDiscount: "$399", image: "https://example.com/images/gpu5.jpg" },
      { id: "gpu6", title: "AMD Radeon RX 6700 XT", priceOld: "$480", priceDiscount: "$430", image: "https://example.com/images/gpu6.jpg" },
      { id: "gpu7", title: "NVIDIA GeForce GTX 1660 Super", priceOld: "$300", priceDiscount: "$260", image: "https://example.com/images/gpu7.jpg" },
      { id: "gpu8", title: "AMD Radeon RX 6600", priceOld: "$330", priceDiscount: "$290", image: "https://example.com/images/gpu8.jpg" }
    ]
  },
  {
    id: "memory",
    category: "Memory",
    products: [
      { id: "ram1", title: "Corsair Vengeance 16GB DDR5", priceOld: "$150", priceDiscount: "$120", image: "https://example.com/images/memory1.jpg" },
      { id: "ram2", title: "G.Skill Trident Z 32GB DDR4", priceOld: "$180", priceDiscount: "$140", image: "https://example.com/images/memory2.jpg" },
      { id: "ram3", title: "Kingston Fury 16GB DDR4", priceOld: "$95", priceDiscount: "$75", image: "https://example.com/images/memory3.jpg" },
      { id: "ram4", title: "Crucial Ballistix 8GB DDR4", priceOld: "$60", priceDiscount: "$45", image: "https://example.com/images/memory4.jpg" },
      { id: "ram5", title: "TeamGroup T-Force 32GB DDR5", priceOld: "$210", priceDiscount: "$180", image: "https://example.com/images/memory5.jpg" },
      { id: "ram6", title: "Patriot Viper 16GB DDR4", priceOld: "$85", priceDiscount: "$65", image: "https://example.com/images/memory6.jpg" },
      { id: "ram7", title: "ADATA XPG Lancer 32GB DDR5", priceOld: "$200", priceDiscount: "$170", image: "https://example.com/images/memory7.jpg" },
      { id: "ram8", title: "Samsung 8GB DDR4 OEM", priceOld: "$40", priceDiscount: "$30", image: "https://example.com/images/memory8.jpg" }
    ]
  },
  {
    id: "monitors",
    category: "Monitors",
    products: [
      { id: "monitor1", title: "ASUS TUF Gaming 27'' Monitor", priceOld: "$320", priceDiscount: "$280", image: "https://example.com/images/monitor1.jpg" },
      { id: "monitor2", title: "LG UltraGear 34'' Curved Monitor", priceOld: "$650", priceDiscount: "$580", image: "https://example.com/images/monitor2.jpg" },
      { id: "monitor3", title: "Dell Alienware 32'' QD-OLED", priceOld: "$1200", priceDiscount: "$1100", image: "https://example.com/images/monitor3.jpg" },
      { id: "monitor4", title: "Samsung Odyssey G7 27''", priceOld: "$700", priceDiscount: "$630", image: "https://example.com/images/monitor4.jpg" },
      { id: "monitor5", title: "Acer Predator 24'' 144Hz", priceOld: "$250", priceDiscount: "$220", image: "https://example.com/images/monitor5.jpg" },
      { id: "monitor6", title: "MSI Optix 27'' Curved", priceOld: "$320", priceDiscount: "$280", image: "https://example.com/images/monitor6.jpg" },
      { id: "monitor7", title: "BenQ Zowie XL2411K 24''", priceOld: "$220", priceDiscount: "$190", image: "https://example.com/images/monitor7.jpg" },
      { id: "monitor8", title: "Gigabyte M32U 32'' 4K", priceOld: "$800", priceDiscount: "$750", image: "https://example.com/images/monitor8.jpg" }
    ]
  }
];

