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
import Gaming_head from '../src/assets/Images/Gaming-Head.png'
import Gaming_keyboard from '../src/assets/Images/Gaming-Keyboards.png'
import Gaming_Accessories from '../src/assets/Images/Gaming-Accessories.png'


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
    image: Gaming_head,
    link: "/headsets",
  },
  {
    id: 5,
    title1: "Keyboards",
    products: 9,
    image: Gaming_keyboard,
    link: "/keyboards",
  },
  {
    id: 6,
    title1: "Accessories",
    products: 27,
    image: Gaming_Accessories,
    link: "/accessories",
  },
];


import cpu1 from '../src/assets/Images/cpu-1.jpg'
import cpu2 from '../src/assets/Images/cpu-2.jpg'
import cpu3 from '../src/assets/Images/cpu-3.jpg'
import cpu4 from '../src/assets/Images/cpu-4.jpg'
import cpu5 from '../src/assets/Images/cpu-5.jpg'
import cpu6 from '../src/assets/Images/cpu-6.jpg'
import cpu7 from '../src/assets/Images/cpu-7.jpg'
import cpu8 from '../src/assets/Images/cpu-8.jpg'

import grap1 from '../src/assets/Images/grap-1.jpg'
import grap2 from '../src/assets/Images/grap-2.jpg'
import grap3 from '../src/assets/Images/grap-3.jpg'
import grap4 from '../src/assets/Images/grap-4.jpg'
import grap5 from '../src/assets/Images/grap-5.jpg'
import grap6 from '../src/assets/Images/grap-6.jpg'
import grap7 from '../src/assets/Images/grap-7.jpg'
import grap8 from '../src/assets/Images/grap-8.jpg'

import memory1 from '../src/assets/Images/memory-1.jpg'
import memory2 from '../src/assets/Images/memory-2.jpg'
import memory3 from '../src/assets/Images/memory-3.jpg'
import memory4 from '../src/assets/Images/memory-4.jpg'
import memory5 from '../src/assets/Images/memory-5.jpg'
import memory6 from '../src/assets/Images/memory-6.jpg'
import memory7 from '../src/assets/Images/memory-7.jpg'
import memory8 from '../src/assets/Images/memory-8.jpg'

import monitor1 from '../src/assets/Images/monitor-1.jpg'
import monitor2 from '../src/assets/Images/monitor-2.jpg'
import monitor3 from '../src/assets/Images/monitor-3.jpg'
import monitor4 from '../src/assets/Images/monitor-4.jpg'
import monitor5 from '../src/assets/Images/monitor-5.jpg'
import monitor6 from '../src/assets/Images/monitor-6.jpg'
import monitor7 from '../src/assets/Images/monitor-7.jpg'
import monitor8 from '../src/assets/Images/monitor-8.jpg'
export const categoriesAllInButton = [
  {
    id: "cpus",
    category: "CPUs",
    products: [
      { id: "cpu1", title: "Intel Core i7 12700K", priceOld: "$420", priceDiscount: "$380", image: cpu1 },
      { id: "cpu2", title: "AMD Ryzen 7 5800X", priceOld: "$390", priceDiscount: "$350", image: cpu2 },
      { id: "cpu3", title: "Intel Core i9 13900K", priceOld: "$650", priceDiscount: "$599", image: cpu3 },
      { id: "cpu4", title: "AMD Ryzen 9 5900X", priceOld: "$550", priceDiscount: "$499", image: cpu4 },
      { id: "cpu5", title: "Intel Core i5 12400F", priceOld: "$220", priceDiscount: "$199", image: cpu5 },
      { id: "cpu6", title: "AMD Ryzen 5 5600G", priceOld: "$250", priceDiscount: "$210", image: cpu6 },
      { id: "cpu7", title: "Intel Core i3 12100", priceOld: "$150", priceDiscount: "$120", image: cpu7 },
      { id: "cpu8", title: "AMD Ryzen 3 3300X", priceOld: "$180", priceDiscount: "$150", image: cpu8 }
    ]
  },
  {
    id: "graphics_cards",
    category: "Graphics Cards",
    products: [
      { id: "gpu1", title: "NVIDIA GeForce RTX 4070", priceOld: "$650", priceDiscount: "$599", image: grap1 },
      { id: "gpu2", title: "AMD Radeon RX 6800 XT", priceOld: "$620", priceDiscount: "$570", image: grap2},
      { id: "gpu3", title: "NVIDIA GeForce RTX 4090", priceOld: "$1600", priceDiscount: "$1499", image: grap3 },
      { id: "gpu4", title: "AMD Radeon RX 7900 XT", priceOld: "$950", priceDiscount: "$899", image: grap4 },
      { id: "gpu5", title: "NVIDIA GeForce RTX 3060 Ti", priceOld: "$450", priceDiscount: "$399", image: grap5 },
      { id: "gpu6", title: "AMD Radeon RX 6700 XT", priceOld: "$480", priceDiscount: "$430", image: grap6},
      { id: "gpu7", title: "NVIDIA GeForce GTX 1660", priceOld: "$300", priceDiscount: "$260", image: grap7 },
      { id: "gpu8", title: "AMD Radeon RX 6600", priceOld: "$330", priceDiscount: "$290", image: grap8 }
    ]
  },
  {
    id: "memory",
    category: "Memory",
    products: [
      { id: "ram1", title: "Corsair Vengeance 16GBDDR5", priceOld: "$150", priceDiscount: "$120", image: memory1},
      { id: "ram2", title: "G.Skill Trident Z 32GB DDR4", priceOld: "$180", priceDiscount: "$140", image: memory2 },
      { id: "ram3", title: "Kingston Fury 16GB DDR4", priceOld: "$95", priceDiscount: "$75", image: memory3 },
      { id: "ram4", title: "Crucial Ballistix 8GB DDR4", priceOld: "$60", priceDiscount: "$45", image: memory4 },
      { id: "ram5", title: "TeamGroup T-Force 32GB", priceOld: "$210", priceDiscount: "$180", image: memory5},
      { id: "ram6", title: "Patriot Viper 16GB DDR4", priceOld: "$85", priceDiscount: "$65", image: memory6 },
      { id: "ram7", title: "ADATA XPG Lancer 32GB", priceOld: "$200", priceDiscount: "$170", image: memory7 },
      { id: "ram8", title: "Samsung 8GB DDR4 OEM", priceOld: "$40", priceDiscount: "$30", image: memory8 }
    ]
  },
  {
    id: "monitors",
    category: "Monitors",
    products: [
      { id: "monitor1", title: "ASUS TUF Gaming 27", priceOld: "$320", priceDiscount: "$280", image: monitor1 },
      { id: "monitor2", title: "LG UltraGear 34'' Curved", priceOld: "$650", priceDiscount: "$580", image: monitor2 },
      { id: "monitor3", title: "Dell Alienware 32'' QD-OLED", priceOld: "$1200", priceDiscount: "$1100", image: monitor3 },
      { id: "monitor4", title: "Samsung Odyssey G7 27''", priceOld: "$700", priceDiscount: "$630", image: monitor4 },
      { id: "monitor5", title: "Acer Predator 24'' 144Hz", priceOld: "$250", priceDiscount: "$220", image: monitor5 },
      { id: "monitor6", title: "MSI Optix 27'' Curved", priceOld: "$320", priceDiscount: "$280", image: monitor6 },
      { id: "monitor7", title: "BenQ Zowie XL2411K 24''", priceOld: "$220", priceDiscount: "$190", image: monitor7 },
      { id: "monitor8", title: "Gigabyte M32U 32'' 4K", priceOld: "$800", priceDiscount: "$750", image: monitor8 }
    ]
  }
];

