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
    title1: "Gaming",
    title2: "Keyboards",
    products: 9,
    image: Gaming_keyboard,
    link: "/keyboards",
  },
  {
    id: 6,
    title1: "Gaming",
    title2: "Accessories",
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
      { 
        id: "cpu1", 
        title: "Intel Core i7 12700K", 
        priceOld: "$420", 
        priceDiscount: "$380", 
        image: cpu1,
        description: "Intel Core i7-12700K ជា CPU ជំនាន់ថ្មី Alder Lake មាន 12 cores និង 20 threads ផ្តល់សមត្ថភាពល្អសម្រាប់ gamers និង creators។ ជាមួយនឹង Turbo Boost និង overclocking វាអាចដំណើរការហ្គេមធ្ងន់ និងកម្មវិធី 3D editing បានល្អ។ ជម្រើសសម្រាប់អ្នកចង់បាន performance ទំនើបក្នុងតម្លៃសមរម្យ។"
      },
      { 
        id: "cpu2", 
        title: "AMD Ryzen 7 5800X", 
        priceOld: "$390", 
        priceDiscount: "$350", 
        image: cpu2,
        description: "AMD Ryzen 7 5800X មាន 8 cores និង 16 threads ផ្អែកលើ Zen 3 architecture ផ្តល់ប្រសិទ្ធភាពខ្ពស់សម្រាប់ការលេងហ្គេម និងការកាត់វីដេអូ។ ជាមួយ clock speed លឿន និង IPC ខ្ពស់ វាបានជោគជ័យក្នុងការបញ្ចេញ performance។ អាចប្រើបានសម្រាប់ multi-tasking និង rendering។"
      },
      { 
        id: "cpu3", 
        title: "Intel Core i9 13900K", 
        priceOld: "$650", 
        priceDiscount: "$599", 
        image: cpu3,
        description: "Intel Core i9-13900K មាន 24 cores និង 32 threads សមស្របសម្រាប់ workstation និង high-end gaming។ ជាមួយ PCIe 5.0 និង DDR5 support វាអាចដំណើរការបានលឿនខ្លាំង។ ជាមួយនឹងបច្ចេកវិទ្យា Turbo Boost វាអាចទៅដល់ clock speed ខ្ពស់។"
      },
      { 
        id: "cpu4", 
        title: "AMD Ryzen 9 5900X", 
        priceOld: "$550", 
        priceDiscount: "$499", 
        image: cpu4,
        description: "Ryzen 9 5900X មាន 12 cores និង 24 threads ផ្តល់សមត្ថភាពដំណើរការលឿនសម្រាប់ creators និង gamers។ វាផ្អែកលើ Zen 3 architecture ដែលមានប្រសិទ្ធភាពខ្ពស់។ ជម្រើសល្អសម្រាប់ការងារទាមទារថាមពលខ្ពស់។"
      },
      { 
        id: "cpu5", 
        title: "Intel Core i5 12400F", 
        priceOld: "$220", 
        priceDiscount: "$199", 
        image: cpu5,
        description: "Intel Core i5-12400F មាន 6 cores និង 12 threads ជាមួយប្រសិទ្ធភាពល្អក្នុងតម្លៃសមរម្យ។ អាចដំណើរការហ្គេម និងកម្មវិធីទូទៅបាន។ ជម្រើសសម្រាប់ budget gamers។"
      },
      { 
        id: "cpu6", 
        title: "AMD Ryzen 5 5600G", 
        priceOld: "$250", 
        priceDiscount: "$210", 
        image: cpu6,
        description: "AMD Ryzen 5 5600G មាន 6 cores និង 12 threads ជាមួយ iGPU Radeon Graphics។ វាអាចដំណើរការហ្គេមតិចតួចបានដោយមិនចាំបាច់មាន GPU ផ្តាច់។ សមស្របសម្រាប់ budget build។"
      },
      { 
        id: "cpu7", 
        title: "Intel Core i3 12100", 
        priceOld: "$150", 
        priceDiscount: "$120", 
        image: cpu7,
        description: "Intel Core i3-12100 មាន 4 cores និង 8 threads ជាជម្រើស entry-level។ វាអាចដំណើរការបានល្អសម្រាប់ការប្រើប្រាស់ប្រចាំថ្ងៃ និងហ្គេមស្រាល។ មានតម្លៃសមរម្យ។"
      },
      { 
        id: "cpu8", 
        title: "AMD Ryzen 3 3300X", 
        priceOld: "$180", 
        priceDiscount: "$150", 
        image: cpu8,
        description: "AMD Ryzen 3 3300X មាន 4 cores និង 8 threads ផ្អែកលើ Zen 2 architecture។ វាអាចដំណើរការហ្គេម 1080p និងការងារទូទៅបាន។ ជម្រើសល្អសម្រាប់អ្នកចាប់ផ្តើម។"
      }
    ]
  },
  {
    id: "graphics_cards",
    category: "Graphics Cards",
    products: [
      { 
        id: "gpu1", 
        title: "NVIDIA GeForce RTX 4070", 
        priceOld: "$650", 
        priceDiscount: "$599", 
        image: grap1,
        description: "NVIDIA RTX 4070 មាន 12GB VRAM, គាំទ្រ ray tracing និង DLSS 3។ សមស្របសម្រាប់ gamers 1440p និង creators។ វាបានកម្រិតប្រសិទ្ធភាពខ្ពស់ និងថាមពលប្រើប្រាស់តិច។"
      },
      { 
        id: "gpu2", 
        title: "AMD Radeon RX 6800 XT", 
        priceOld: "$620", 
        priceDiscount: "$570", 
        image: grap2,
        description: "AMD RX 6800 XT មាន 16GB VRAM និង RDNA 2 architecture។ សមស្របសម្រាប់ 4K gaming និងមានប្រសិទ្ធភាពខ្ពស់ក្នុងតម្លៃសមរម្យ។"
      },
      { 
        id: "gpu3", 
        title: "NVIDIA GeForce RTX 4090", 
        priceOld: "$1600", 
        priceDiscount: "$1499", 
        image: grap3,
        description: "RTX 4090 ជា GPU ទំនើបសម្រាប់ gamers និង workstation។ មាន 24GB GDDR6X VRAM សម្រាប់ AI rendering និង 8K gaming។"
      },
      { 
        id: "gpu4", 
        title: "AMD Radeon RX 7900 XT", 
        priceOld: "$950", 
        priceDiscount: "$899", 
        image: grap4,
        description: "RX 7900 XT មាន RDNA 3 architecture និង memory 20GB GDDR6។ ផ្តល់ប្រសិទ្ធភាពខ្ពស់សម្រាប់ 4K gaming និង ray tracing។"
      },
      { 
        id: "gpu5", 
        title: "NVIDIA GeForce RTX 3060 Ti", 
        priceOld: "$450", 
        priceDiscount: "$399", 
        image: grap5,
        description: "RTX 3060 Ti ជា mid-range GPU មានប្រសិទ្ធភាពល្អសម្រាប់ 1080p និង 1440p gaming។ គាំទ្រ ray tracing និង DLSS។"
      },
      { 
        id: "gpu6", 
        title: "AMD Radeon RX 6700 XT", 
        priceOld: "$480", 
        priceDiscount: "$430", 
        image: grap6,
        description: "AMD RX 6700 XT មាន 12GB VRAM និង RDNA 2 architecture។ សមស្របសម្រាប់ gamers 1440p និង productivity។"
      },
      { 
        id: "gpu7", 
        title: "NVIDIA GeForce GTX 1660", 
        priceOld: "$300", 
        priceDiscount: "$260", 
        image: grap7,
        description: "GTX 1660 ជា GPU មធ្យមសមស្របសម្រាប់ 1080p gaming។ មាន power efficiency ល្អ ប៉ុន្តែមិនគាំទ្រ ray tracing។"
      },
      { 
        id: "gpu8", 
        title: "AMD Radeon RX 6600", 
        priceOld: "$330", 
        priceDiscount: "$290", 
        image: grap8,
        description: "AMD RX 6600 មាន RDNA 2 architecture និង VRAM 8GB។ ជម្រើសល្អសម្រាប់ gamers 1080p ក្នុងតម្លៃសមរម្យ។"
      }
    ]
  },
  {
    id: "memory",
    category: "Memory",
    products: [
      { id: "ram1", title: "Corsair Vengeance 16GB DDR5", priceOld: "$150", priceDiscount: "$120", image: memory1,
        description: "Corsair Vengeance 16GB DDR5 មានល្បឿនខ្ពស់ សមស្របសម្រាប់ workstation និង gaming PCs។"
      },
      { id: "ram2", title: "G.Skill Trident Z 32GB DDR4", priceOld: "$180", priceDiscount: "$140", image: memory2,
        description: "G.Skill Trident Z RGB DDR4 32GB មានប្រសិទ្ធភាពខ្ពស់ សមស្របសម្រាប់ content creators និង gamers។"
      },
      { id: "ram3", title: "Kingston Fury 16GB DDR4", priceOld: "$95", priceDiscount: "$75", image: memory3,
        description: "Kingston Fury 16GB DDR4 ជា RAM មធ្យមមានប្រសិទ្ធភាពល្អសម្រាប់ការលេងហ្គេម និងការងារទូទៅ។"
      },
      { id: "ram4", title: "Crucial Ballistix 8GB DDR4", priceOld: "$60", priceDiscount: "$45", image: memory4,
        description: "Crucial Ballistix 8GB DDR4 ជា RAM តម្លៃសមរម្យសម្រាប់អ្នកប្រើប្រាស់ថ្មី។"
      },
      { id: "ram5", title: "TeamGroup T-Force 32GB", priceOld: "$210", priceDiscount: "$180", image: memory5,
        description: "TeamGroup T-Force 32GB RAM មាន performance ខ្ពស់សម្រាប់ workstation និង gaming។"
      },
      { id: "ram6", title: "Patriot Viper 16GB DDR4", priceOld: "$85", priceDiscount: "$65", image: memory6,
        description: "Patriot Viper 16GB DDR4 RAM មាន latency ទាប និងសមត្ថភាពល្អសម្រាប់ PC gaming។"
      },
      { id: "ram7", title: "ADATA XPG Lancer 32GB", priceOld: "$200", priceDiscount: "$170", image: memory7,
        description: "ADATA XPG Lancer 32GB DDR5 មានល្បឿនខ្ពស់ សមស្របសម្រាប់ high-end gaming systems។"
      },
      { id: "ram8", title: "Samsung 8GB DDR4 OEM", priceOld: "$40", priceDiscount: "$30", image: memory8,
        description: "Samsung 8GB DDR4 OEM ជា RAM សាមញ្ញសម្រាប់ការងារទូទៅ និងប្រើប្រាស់ប្រចាំថ្ងៃ។"
      }
    ]
  },
  {
    id: "monitors",
    category: "Monitors",
    products: [
      { id: "monitor1", title: "ASUS TUF Gaming 27", priceOld: "$320", priceDiscount: "$280", image: monitor1,
        description: "ASUS TUF Gaming 27 មាន refresh rate 165Hz និង response time 1ms សមស្របសម្រាប់ gamers។"
      },
      { id: "monitor2", title: "LG UltraGear 34'' Curved", priceOld: "$650", priceDiscount: "$580", image: monitor2,
        description: "LG UltraGear 34'' Curved UltraWide QHD ផ្តល់បទពិសោធន៍ល្អសម្រាប់ gamers និង creators។"
      },
      { id: "monitor3", title: "Dell Alienware 32'' QD-OLED", priceOld: "$1200", priceDiscount: "$1100", image: monitor3,
        description: "Dell Alienware 32'' QD-OLED មានពណ៌ច្បាស់ និង response time រហ័សសម្រាប់ esports។"
      },
      { id: "monitor4", title: "Samsung Odyssey G7 27''", priceOld: "$700", priceDiscount: "$630", image: monitor4,
        description: "Samsung Odyssey G7 27'' មាន refresh rate 240Hz និង HDR600 សម្រាប់ gaming។"
      },
      { id: "monitor5", title: "Acer Predator 24'' 144Hz", priceOld: "$250", priceDiscount: "$220", image: monitor5,
        description: "Acer Predator 24'' Full HD 144Hz ជា monitor តម្លៃសមរម្យសម្រាប់ gamers។"
      },
      { id: "monitor6", title: "MSI Optix 27'' Curved", priceOld: "$320", priceDiscount: "$280", image: monitor6,
        description: "MSI Optix 27'' Curved មាន panel VA និង refresh rate 165Hz ផ្តល់បទពិសោធន៍ immersive gaming។"
      },
      { id: "monitor7", title: "BenQ Zowie XL2411K 24''", priceOld: "$220", priceDiscount: "$190", image: monitor7,
        description: "BenQ Zowie XL2411K 24'' Full HD 144Hz ជា monitor esports មាន response time ខ្ពស់។"
      },
      { id: "monitor8", title: "Gigabyte M32U 32'' 4K", priceOld: "$800", priceDiscount: "$750", image: monitor8,
        description: "Gigabyte M32U 32'' 4K UHD មាន HDMI 2.1 និង refresh rate 144Hz សម្រាប់ PC និង console gaming។"
      }
    ]
  }
];

import ctrl1 from '../src/assets/Images/ctrl1.jpg'
import ctrl2 from '../src/assets/Images/ctrl2.jpg'
import ctrl3 from '../src/assets/Images/ctrl3.jpg'
import ctrl4 from '../src/assets/Images/ctrl4.jpg'
import ctrl5 from '../src/assets/Images/ctrl5.jpg'
import ctrl6 from '../src/assets/Images/ctrl6.jpg'
import ctrl7 from '../src/assets/Images/ctrl7.jpg'
import ctrl8 from '../src/assets/Images/ctrl8.jpg'

export const controllerProducts = [
  {
    id: "ctrl1",
    cate: "Controller",
    title: "Xbox Wireless Controller",
    description: "Xbox Wireless Controller មាន ergonomic design, textured grip និង Bluetooth connectivity សម្រាប់ PC និង Console gaming។",
    priceOld: "$70",
    priceDiscount: "$55",
    image: ctrl1
  },
  {
    id: "ctrl2",
    cate: "Controller",
    title: "PlayStation DualSense",
    description: "PS5 DualSense controller មាន adaptive triggers, haptic feedback និង built-in mic សម្រាប់ immersive gaming។",
    priceOld: "$75",
    priceDiscount: "$60",
    image: ctrl2
  },
  {
    id: "ctrl3",
    cate: "Controller",
    title: "Nintendo Switch Pro Controller",
    description: "Switch Pro Controller មាន ergonomic design, motion controls និង battery life 40 hours សម្រាប់ Switch gamers។",
    priceOld: "$80",
    priceDiscount: "$65",
    image: ctrl3
  },
  {
    id: "ctrl4",
    cate: "Controller",
    title: "Razer Wolverine V2",
    description: "Razer Wolverine V2 មាន Mecha-Tactile buttons, remappable buttons និង ergonomic L-shaped hand grips សម្រាប់ Xbox/PC។",
    priceOld: "$100",
    priceDiscount: "$85",
    image: ctrl4
  },
  {
    id: "ctrl5",
    cate: "Controller",
    title: "8Bitdo Pro 2",
    description: "8Bitdo Pro 2 មាន retro design, customizable buttons និង multi-platform support សម្រាប់ gamers classic និង modern។",
    priceOld: "$70",
    priceDiscount: "$55",
    image: ctrl5
  },
  {
    id: "ctrl6",
    cate: "Controller",
    title: "Logitech F710 Wireless",
    description: "Logitech F710 Wireless មាន dual vibration feedback, 2.4GHz wireless connection និង programmable buttons។",
    priceOld: "$60",
    priceDiscount: "$45",
    image: ctrl6
  },
  {
    id: "ctrl7",
    cate: "Controller",
    title: "Scuf Instinct Pro",
    description: "Scuf Instinct Pro មាន performance paddles, adjustable triggers និង ergonomic design សម្រាប់ competitive gamers។",
    priceOld: "$200",
    priceDiscount: "$180",
    image: ctrl7
  },
  {
    id: "ctrl8",
    cate: "Controller",
    title: "GameSir T4 Pro",
    description: "GameSir T4 Pro មាន RGB backlight, multi-platform support និង ergonomic build សម្រាប់ PC, Android និង Switch។",
    priceOld: "$60",
    priceDiscount: "$48",
    image: ctrl8
  }
];

import mouse1 from '../src/assets/Images/mouse1.jpg'
import mouse2 from '../src/assets/Images/mouse2.jpg'
import mouse3 from '../src/assets/Images/mouse3.jpg'
import mouse4 from '../src/assets/Images/mouse4.jpg'
import mouse5 from '../src/assets/Images/mouse5.jpg'
import mouse6 from '../src/assets/Images/mouse6.jpg'
import mouse7 from '../src/assets/Images/mouse7.jpg'
import mouse8 from '../src/assets/Images/mouse8.jpg'
export const mouseProducts = [
  {
    id: "mouse1",
    cate: "Gaming Mouse",
    title: "Logitech G502 HERO",
    description: "Logitech G502 HERO ជា gaming mouse មាន HERO sensor 25K DPI, 11 programmable buttons និង RGB lighting សម្រាប់ pro gamers។",
    priceOld: "$80",
    priceDiscount: "$65",
    image: mouse1
  },
  {
    id: "mouse2",
    cate: "Gaming Mouse",
    title: "Razer DeathAdder V2",
    description: "Razer DeathAdder V2 មាន ergonomic design, optical sensor 20K DPI និង Speedflex cable ផ្តល់សមត្ថភាពលេងបានយូរ។",
    priceOld: "$75",
    priceDiscount: "$60",
    image: mouse2
  },
  {
    id: "mouse3",
    cate: "Gaming Mouse",
    title: "SteelSeries Rival 600",
    description: "SteelSeries Rival 600 មាន dual-sensor system, adjustable weight និង RGB lighting សម្រាប់ accuracy ខ្ពស់។",
    priceOld: "$85",
    priceDiscount: "$70",
    image: mouse3
  },
  {
    id: "mouse4",
    cate: "Gaming Mouse",
    title: "Corsair Dark Core RGB Pro",
    description: "Corsair Dark Core RGB Pro ជា wireless mouse មាន 18K DPI sensor, 8 programmable buttons និង RGB dynamic។",
    priceOld: "$90",
    priceDiscount: "$75",
    image: mouse4
  },
  {
    id: "mouse5",
    cate: "Gaming Mouse",
    title: "Glorious Model O",
    description: "Glorious Model O មាន lightweight honeycomb design, 67g, sensor 12K DPI និង flexible cable សម្រាប់ competitive gaming។",
    priceOld: "$70",
    priceDiscount: "$55",
    image: mouse5
  },
  {
    id: "mouse6",
    cate: "Gaming Mouse",
    title: "Cooler Master MM710",
    description: "Cooler Master MM710 មាន ultra-lightweight 53g, durable design និង sensor 16K DPI សម្រាប់ gamers ល្បឿនលឿន។",
    priceOld: "$65",
    priceDiscount: "$50",
    image: mouse6
  },
  {
    id: "mouse7",
    cate: "Gaming Mouse",
    title: "HyperX Pulsefire FPS Pro",
    description: "HyperX Pulsefire FPS Pro មាន Pixart 3389 sensor 16K DPI, customizable RGB និង ergonomic design សម្រាប់ FPS lovers។",
    priceOld: "$75",
    priceDiscount: "$58",
    image: mouse7
  },
  {
    id: "mouse8",
    cate: "Gaming Mouse",
    title: "ASUS ROG Gladius III",
    description: "ASUS ROG Gladius III មាន ergonomic design, sensor 19K DPI, swappable switches និង RGB Aura Sync។",
    priceOld: "$85",
    priceDiscount: "$68",
    image: mouse8
  }
];

// import mouse8 from '../src/assets/Images/mouse8.jpg'
export const chairProducts = [
  {
    id: "chair1",
    cate: "Gaming Chair",
    title: "Secretlab TITAN Evo 2022",
    description: "Secretlab TITAN Evo 2022 ជា gaming chair ergonomics ខ្ពស់ មាន memory foam, multi-tilt mechanism និង durable leatherette សម្រាប់ការលេងហ្គេមយូរម៉ោង។",
    priceOld: "$520",
    priceDiscount: "$470",
    // image: chair1
  },
  {
    id: "chair2",
    cate: "Gaming Chair",
    title: "DXRacer Formula Series",
    description: "DXRacer Formula Series មាន ergonomic design, adjustable armrests និង breathable material សមស្របសម្រាប់ gamers និង streamers។",
    priceOld: "$400",
    priceDiscount: "$350",
    // image: chair2
  },
  {
    id: "chair3",
    cate: "Gaming Chair",
    title: "AKRacing Masters Series",
    description: "AKRacing Masters Series មានសម្ភារៈ premium PU leather, adjustable tilt និង 4D armrests ផ្តល់សុខស្រួលខ្ពស់។",
    priceOld: "$450",
    priceDiscount: "$399",
    // image: chair3
  },
  {
    id: "chair4",
    cate: "Gaming Chair",
    title: "Respawn 110 Racing Style",
    description: "Respawn 110 មាន footrest, ergonomic padding និង recline 155° សម្រាប់កំសាន្ត និងការលេងហ្គេម។",
    priceOld: "$300",
    priceDiscount: "$260",
    // image: chair4
  },
  {
    id: "chair5",
    cate: "Gaming Chair",
    title: "Cougar Armor S Royal",
    description: "Cougar Armor S Royal មាន design luxury, breathable PVC leather និង headrest pillow ដើម្បីការពារក ឆ្អឹងខ្នង។",
    priceOld: "$350",
    priceDiscount: "$310",
    // image: chair5
  },
  {
    id: "chair6",
    cate: "Gaming Chair",
    title: "Noblechairs Hero",
    description: "Noblechairs Hero មាន lumbar support system, high-density cold foam និង strong steel frame សម្រាប់ durability។",
    priceOld: "$520",
    priceDiscount: "$480",
    // image: chair6
  },
  {
    id: "chair7",
    cate: "Gaming Chair",
    title: "Vertagear SL5000",
    description: "Vertagear SL5000 មាន ergonomic design, 4D adjustable armrests និង durable steel frame សម្រាប់ pro gamers។",
    priceOld: "$400",
    priceDiscount: "$360",
    // image: chair7
  },
  {
    id: "chair8",
    cate: "Gaming Chair",
    title: "Razer Iskur",
    description: "Razer Iskur ជា gaming chair មាន lumbar support adjustable, high-density foam និង multi-layered synthetic leather។",
    priceOld: "$500",
    priceDiscount: "$450",
    // image: chair8
  }
];

export const headsetProducts = [
  {
    id: "headset1",
    cate: "Gaming Headset",
    title: "SteelSeries Arctis 7",
    description: "SteelSeries Arctis 7 ជា wireless gaming headset មាន DTS Headphone:X v2.0 surround sound និង comfort ear cushions សម្រាប់ការលេងហ្គេមយូរ។",
    priceOld: "$170",
    priceDiscount: "$140",
    // image: headset1
  },
  {
    id: "headset2",
    cate: "Gaming Headset",
    title: "HyperX Cloud II",
    description: "HyperX Cloud II មាន 7.1 virtual surround sound, memory foam ear pads និង durable aluminum frame សម្រាប់ sound quality ខ្ពស់។",
    priceOld: "$150",
    priceDiscount: "$120",
    // image: headset2
  },
  {
    id: "headset3",
    cate: "Gaming Headset",
    title: "Razer BlackShark V2",
    description: "Razer BlackShark V2 មាន TriForce Titanium 50mm drivers, HyperClear mic និង passive noise cancellation សម្រាប់ esports gamers។",
    priceOld: "$130",
    priceDiscount: "$105",
    // image: headset3
  },
  {
    id: "headset4",
    cate: "Gaming Headset",
    title: "Corsair HS80 RGB Wireless",
    description: "Corsair HS80 RGB Wireless មាន Dolby Atmos, 20 hours battery និង RGB lighting សម្រាប់អារម្មណ៍ gaming ខ្ពស់។",
    priceOld: "$160",
    priceDiscount: "$130",
    // image: headset4
  },
  {
    id: "headset5",
    cate: "Gaming Headset",
    title: "Logitech G Pro X",
    description: "Logitech G Pro X មាន Blue VO!CE mic technology, DTS Headphone:X 2.0 និង comfort design សម្រាប់ streamers និង gamers។",
    priceOld: "$150",
    priceDiscount: "$125",
    // image: headset5
  },
  {
    id: "headset6",
    cate: "Gaming Headset",
    title: "Astro A50 Wireless",
    description: "Astro A50 Wireless មាន Dolby Audio, wireless base station និង comfort padding សម្រាប់ console និង PC gaming។",
    priceOld: "$300",
    priceDiscount: "$270",
    // image: headset6
  },
  {
    id: "headset7",
    cate: "Gaming Headset",
    title: "Razer Kraken Ultimate",
    description: "Razer Kraken Ultimate មាន THX Spatial Audio, RGB Chroma និង active noise-cancelling mic សម្រាប់ competitive gamers។",
    priceOld: "$130",
    priceDiscount: "$110",
    // image: headset7
  },
  {
    id: "headset8",
    cate: "Gaming Headset",
    title: "Beyerdynamic MMX 300",
    description: "Beyerdynamic MMX 300 ជា studio-grade gaming headset មាន high-fidelity sound និង comfort build សម្រាប់ audiophiles និង gamers។",
    priceOld: "$320",
    priceDiscount: "$290",
    // image: headset8
  }
];

export const keyboardProducts = [
  {
    id: "kb1",
    cate: "Gaming Keyboard",
    title: "Razer Huntsman Elite",
    description: "Razer Huntsman Elite មាន optical switches ultra-fast, RGB Chroma lighting និង wrist rest សម្រាប់ការលេងហ្គេមបានយូរ។",
    priceOld: "$200",
    priceDiscount: "$170",
    // image: keyboard1
  },
  {
    id: "kb2",
    cate: "Gaming Keyboard",
    title: "Corsair K95 RGB Platinum XT",
    description: "Corsair K95 RGB Platinum XT មាន Cherry MX switches, 6 macro keys និង per-key RGB lighting សម្រាប់ gamers និង streamers។",
    priceOld: "$220",
    priceDiscount: "$190",
    // image: keyboard2
  },
  {
    id: "kb3",
    cate: "Gaming Keyboard",
    title: "SteelSeries Apex Pro",
    description: "SteelSeries Apex Pro មាន adjustable OmniPoint switches, OLED display និង RGB per-key lighting សម្រាប់ flexibility ខ្ពស់។",
    priceOld: "$210",
    priceDiscount: "$185",
    // image: keyboard3
  },
  {
    id: "kb4",
    cate: "Gaming Keyboard",
    title: "Logitech G915 TKL",
    description: "Logitech G915 TKL wireless មាន low-profile mechanical switches, LIGHTSPEED technology និង RGB lighting។",
    priceOld: "$230",
    priceDiscount: "$200",
    // image: keyboard4
  },
  {
    id: "kb5",
    cate: "Gaming Keyboard",
    title: "HyperX Alloy FPS Pro",
    description: "HyperX Alloy FPS Pro មាន compact design, Cherry MX switches និង durable steel frame សម្រាប់ FPS gamers។",
    priceOld: "$110",
    priceDiscount: "$90",
    // image: keyboard5
  },
  {
    id: "kb6",
    cate: "Gaming Keyboard",
    title: "ASUS ROG Strix Scope RX",
    description: "ASUS ROG Strix Scope RX មាន optical mechanical switches, durable build និង RGB Aura Sync lighting។",
    priceOld: "$150",
    priceDiscount: "$125",
    // image: keyboard6
  },
  {
    id: "kb7",
    cate: "Gaming Keyboard",
    title: "Cooler Master MK730",
    description: "Cooler Master MK730 មាន tenkeyless design, RGB per-key lighting និង removable magnetic wrist rest។",
    priceOld: "$140",
    priceDiscount: "$115",
    // image: keyboard7
  },
  {
    id: "kb8",
    cate: "Gaming Keyboard",
    title: "Ducky One 2 Mini",
    description: "Ducky One 2 Mini មាន 60% compact design, RGB lighting និង double-shot PBT keycaps សម្រាប់ portability និង durability។",
    priceOld: "$120",
    priceDiscount: "$100",
    // image: keyboard8
  }
];

export const accessoriesProducts = [
  {
    id: "acc1",
    cate: "Gaming Accessories",
    title: "Razer Firefly V2",
    description: "Razer Firefly V2 ជា RGB mousepad មាន micro-textured surface និង Chroma lighting effects សម្រាប់ precision និង style។",
    priceOld: "$60",
    priceDiscount: "$45",
    // image: acc1
  },
  {
    id: "acc2",
    cate: "Gaming Accessories",
    title: "Elgato Stream Deck",
    description: "Elgato Stream Deck មាន LCD keys programmable 15 ប៊ូតុង សម្រាប់ streamers និង creators ដើម្បី control content បានងាយ។",
    priceOld: "$150",
    priceDiscount: "$130",
    // image: acc2
  },
  {
    id: "acc3",
    cate: "Gaming Accessories",
    title: "Logitech C922 Pro Webcam",
    description: "Logitech C922 Pro Webcam មាន 1080p/60fps video, auto light correction និង dual mic សម្រាប់ streamers និង video calls។",
    priceOld: "$120",
    priceDiscount: "$95",
    // image: acc3
  },
  {
    id: "acc4",
    cate: "Gaming Accessories",
    title: "Elgato HD60 X Capture Card",
    description: "Elgato HD60 X ជា external capture card 1080p60 HDR និង passthrough 4K60 HDR10 សម្រាប់ console streamers។",
    priceOld: "$200",
    priceDiscount: "$170",
    // image: acc4
  },
  {
    id: "acc5",
    cate: "Gaming Accessories",
    title: "Cooler Master Notepal X3",
    description: "Cooler Master Notepal X3 cooling pad មាន large 200mm fan និង ergonomic design សម្រាប់ gaming laptops។",
    priceOld: "$60",
    priceDiscount: "$45",
    // image: acc5
  },
  {
    id: "acc6",
    cate: "Gaming Accessories",
    title: "Razer Charging Dock",
    description: "Razer Universal Charging Dock មាន magnetic contact system សម្រាប់ចោទ wireless headsets ឬ controllers។",
    priceOld: "$40",
    priceDiscount: "$30",
    // image: acc6
  },
  {
    id: "acc7",
    cate: "Gaming Accessories",
    title: "HyperX Wrist Rest",
    description: "HyperX Wrist Rest មាន cool gel memory foam និង anti-slip base សម្រាប់ comfort នៅពេលវាយអក្សរ ឬលេងហ្គេម។",
    priceOld: "$30",
    priceDiscount: "$20",
    // image: acc7
  },
  {
    id: "acc8",
    cate: "Gaming Accessories",
    title: "ASUS ROG Sheath Extended Mousepad",
    description: "ASUS ROG Sheath Extended Mousepad មាន anti-fray stitching, rubber base និងទំហំធំ សម្រាប់ desk setups។",
    priceOld: "$50",
    priceDiscount: "$35",
    // image: acc8
  }
];





