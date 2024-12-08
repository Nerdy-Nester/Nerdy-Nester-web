import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../assets/images/index";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Login",
    link: "/signin",
  },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: spfOne,
    productName: "Nerdy Nester Electric Wearable Portable Breast Pump",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
 
  {
    _id: 1002,
    img: spfTwo,
    productName: "Nerdy Nester - Portable Bottle Warmer",
    price: "KES. 4,500.00",
    badge: true,
    des: "Stay prepared wherever you are with our versatile wireless bottle warmer. Designed for travel, outings, and everyday use, this portable bottle warmer can be used while charging or plugged in, ensuring you can brew baby bottles anytime, anywhere.",
    details: {
        features: [
            "360-Degree Surround Heating: Enjoy evenly heated milk with 6 adjustable temperature levels (37°C, 40°C, 42°C, 45°C, 50°C, 55°C).",
            "Long-Lasting Insulation: Multiple thermal insulation materials to keep milk warmer for longer while saving energy.",
            "Adjustable Fit: Hook and loop fastener adapts to various shapes of baby bottles for a secure fit.",
            "Precise Temperature Control: Spring temperature control head ensures accurate heating.",
            "Stable Heating: Two 3000 mAh batteries provide consistent and reliable warmth."
        ],
        specifications: {
            chargingTime: "5 hours",
            battery: "18650 lithium battery, 6000 mAh capacity",
            batteryLife: "Approximately 300 cycles",
            power: "18W",
            heatingDuration: "90 minutes",
            keepWarmDuration: "2.5-5 hours",
            heatingTime: "30 minutes",
            voltage: "5V",
            output: "2A",
            dimensions: "55 x 145 x 87 mm",
            weight: "225g"
        },
        safetyReminder: "Ensure the bottom of the bottle is tightly attached to the spring-loaded temperature control head for accurate temperature measurement. Always check the temperature before feeding."
    }
}

 
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: 1001,
    img: spfOne,
    productName: "Nerdy Nester Electric Wearable Portable Breast Pump",
    price: "KES. 8400.00",
    badge: true,
    des: " The hands free breast pump can be wear under nursing bra well for more convenient pumping. Moms can pump breast milk anytime anywhere.",
  },
  {
    _id: 1002,
    img: spfTwo,
    productName: "Nerdy Nester - Portable Bottle Warmer",
    price: "KES. 4,500.00",
    badge: true,
    des: "Stay prepared wherever you are with our versatile wireless bottle warmer. Designed for travel, outings, and everyday use, this portable bottle warmer can be used while charging or plugged in, ensuring you can brew baby bottles anytime, anywhere.",
    details: {
        features: [
            "360-Degree Surround Heating: Enjoy evenly heated milk with 6 adjustable temperature levels (37°C, 40°C, 42°C, 45°C, 50°C, 55°C).",
            "Long-Lasting Insulation: Multiple thermal insulation materials to keep milk warmer for longer while saving energy.",
            "Adjustable Fit: Hook and loop fastener adapts to various shapes of baby bottles for a secure fit.",
            "Precise Temperature Control: Spring temperature control head ensures accurate heating.",
            "Stable Heating: Two 3000 mAh batteries provide consistent and reliable warmth."
        ],
        specifications: {
            chargingTime: "5 hours",
            battery: "18650 lithium battery, 6000 mAh capacity",
            batteryLife: "Approximately 300 cycles",
            power: "18W",
            heatingDuration: "90 minutes",
            keepWarmDuration: "2.5-5 hours",
            heatingTime: "30 minutes",
            voltage: "5V",
            output: "2A",
            dimensions: "55 x 145 x 87 mm",
            weight: "225g"
        },
        safetyReminder: "Ensure the bottom of the bottle is tightly attached to the spring-loaded temperature control head for accurate temperature measurement. Always check the temperature before feeding."
    }
}


];
// =================== PaginationItems End here =================
