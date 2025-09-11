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


export const controllerProducts = [
  {
    id: "ctrl1",
    name: "Intel Core i7 12700K",
    description: "Intel Core i7-12700K ជា CPU Alder Lake មាន 12 cores និង 20 threads ផ្តល់ performance ខ្ពស់សម្រាប់ gamers និង creators។",
    priceOld: "$420",
    priceDiscount: "$380",
    image: cpu1
  },
  {
    id: "ctrl2",
    name: "AMD Ryzen 7 5800X",
    description: "AMD Ryzen 7 5800X មាន 8 cores និង 16 threads ផ្អែកលើ Zen 3 architecture ផ្តល់ប្រសិទ្ធភាពខ្ពស់សម្រាប់ហ្គេម និងការងារទាមទារ។",
    priceOld: "$390",
    priceDiscount: "$350",
    image: cpu2
  },
  {
    id: "ctrl3",
    name: "NVIDIA GeForce RTX 4070",
    description: "NVIDIA RTX 4070 មាន 12GB VRAM, គាំទ្រ ray tracing និង DLSS 3, សមស្របសម្រាប់ gamers 1440p និង creators។",
    priceOld: "$650",
    priceDiscount: "$599",
    image: grap1
  },
  {
    id: "ctrl4",
    name: "AMD Radeon RX 6800 XT",
    description: "AMD RX 6800 XT មាន 16GB VRAM និង RDNA 2 architecture សម្រាប់ 4K gaming និង workstation។",
    priceOld: "$620",
    priceDiscount: "$570",
    image: grap2
  },
  {
    id: "ctrl5",
    name: "Corsair Vengeance 16GB DDR5",
    description: "Corsair Vengeance 16GB DDR5 RAM មានល្បឿនខ្ពស់ សមស្របសម្រាប់ workstation និង gaming PCs។",
    priceOld: "$150",
    priceDiscount: "$120",
    image: memory1
  },
  {
    id: "ctrl6",
    name: "G.Skill Trident Z 32GB DDR4",
    description: "G.Skill Trident Z RGB DDR4 32GB មាន performance ខ្ពស់ សម្រាប់ content creators និង gamers។",
    priceOld: "$180",
    priceDiscount: "$140",
    image: memory2
  },
  {
    id: "ctrl7",
    name: "ASUS TUF Gaming 27''",
    description: "ASUS TUF Gaming 27 មាន refresh rate 165Hz និង response time 1ms សមស្របសម្រាប់ gamers។",
    priceOld: "$320",
    priceDiscount: "$280",
    image: monitor1
  },
  {
    id: "ctrl8",
    name: "LG UltraGear 34'' Curved",
    description: "LG UltraGear 34'' Curved UltraWide QHD ផ្តល់បទពិសោធន៍ immersive gaming និង productivity។",
    priceOld: "$650",
    priceDiscount: "$580",
    image: monitor2
  }
];


