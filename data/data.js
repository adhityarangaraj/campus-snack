// ===============================
// Canteen Constants
// ===============================

const KC_ONLY = ["kc"];
const SOUTHERN_ONLY=["southern"];

const BREAKFAST_CANTEENS = ["kc", "southern", "vinayaka"];
const CHINESE_CANTEENS = ["kc", "southern", "vinayaka"];
const NORTH_INDIAN_CANTEENS = ["kc", "southern", "vinayaka"];
const LUNCH_CANTEENS = ["kc", "southern", "vinayaka"];

const SNACK_CANTEENS = ["kc", "southern", "vinayaka", "velan"];
const KC_SNACKS = ["kc"];
const VELAN_SNACKS = ["velan"];

const KC_DESSERTS = ["kc"];
const VELAN_DESSERTS = ["velan"];

const BEVERAGE_CANTEENS = ["kc", "southern", "vinayaka"];
const KC_BEVERAGES = ["kc"];


// ===============================
// Breakfast Menu
// ===============================

const breakfast = [
    {
        id: "plain-dosa",
        name: "Plain Dosa",
        price: 40,
        categories: ["all", "breakfast"],
        image: "dosa.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "masala-dosa",
        name: "Masala Dosa",
        price: 45,
        categories: ["all", "breakfast"],
        image: "masala-dosa.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "onion-dosa",
        name: "Onion Dosa",
        price: 50,
        categories: ["all", "breakfast"],
        image: "dosa.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "podi-dosa",
        name: "Podi Dosa",
        price: 55,
        categories: ["all", "breakfast"],
        image: "podi-dosa.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "ghee-dosa",
        name: "Ghee Dosa",
        price: 60,
        categories: ["all", "breakfast"],
        image: "ghee-dosa.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "gobi-dosa",
        name: "Gobi Dosa",
        price: 60,
        categories: ["all", "breakfast"],
        image: "gobi-dosa.jpg",
        canteens: KC_ONLY
    },
    {
        id: "paneer-dosa",
        name: "Paneer Dosa",
        price: 65,
        categories: ["all", "breakfast"],
        image: "paneer-dosa.jpg",
        canteens: KC_ONLY
    },
    {
        id: "idli",
        name: "Idli (2 pcs)",
        price: 25,
        categories: ["all", "breakfast"],
        image: "idli.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "pongal",
        name: "Pongal",
        price: 40,
        categories: ["all", "breakfast"],
        image: "pongal.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "poori",
        name: "Poori (2 pcs)",
        price: 45,
        categories: ["all", "breakfast"],
        image: "poori.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "chapathi",
        name: "Chapathi (2 pcs)",
        price: 40,
        categories: ["all", "breakfast"],
        image: "chapathi.jpg",
        canteens: BREAKFAST_CANTEENS
    },
    {
        id: "medu-vada",
        name: "Medu Vada",
        price: 15,
        categories: ["all", "breakfast"],
        image: "vada.jpg",
        canteens: BREAKFAST_CANTEENS
    }
];

const chinese = [
    {
        id: "veg-fried-rice",
        name: "Veg Fried Rice",
        price: 70,
        categories: ["all", "lunch", "chinese"],
        image: "veg-fried-rice.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "gobi-fried-rice",
        name: "Gobi Fried Rice",
        price: 85,
        categories: ["all", "lunch", "chinese"],
        image: "gobi-fried-rice.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "paneer-fried-rice",
        name: "Paneer Fried Rice",
        price: 90,
        categories: ["all", "lunch", "chinese"],
        image: "paneer-fried-rice.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "veg-noodles",
        name: "Veg Noodles",
        price: 70,
        categories: ["all", "lunch", "chinese"],
        image: "veg-noodles.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "gobi-noodles",
        name: "Gobi Noodles",
        price: 85,
        categories: ["all", "lunch", "chinese"],
        image: "gobi-noodles.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "paneer-noodles",
        name: "Paneer Noodles",
        price: 90,
        categories: ["all", "lunch", "chinese"],
        image: "paneer-noodles.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "veg-manchurian",
        name: "Veg Manchurian",
        price: 80,
        categories: ["all", "lunch", "chinese"],
        image: "veg-manchurian.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "gobi-manchurian",
        name: "Gobi Manchurian",
        price: 90,
        categories: ["all", "lunch", "chinese"],
        image: "gobi-manchurian.jpg",
        canteens: CHINESE_CANTEENS
    },
    {
        id: "paneer-manchurian",
        name: "Paneer Manchurian",
        price: 100,
        categories: ["all", "lunch", "chinese"],
        image: "paneer-manchurian.jpg",
        canteens: CHINESE_CANTEENS
    },

    // KC Exclusive
    {
        id: "chettinad-paneer-biryani",
        name: "Chettinad Paneer Biryani",
        price: 120,
        categories: ["all", "lunch", "chinese"],
        image: "chettinad-paneer-biryani.jpg",
        canteens: KC_ONLY
    },
    {
        id: "chettinad-gobi-biryani",
        name: "Chettinad Gobi Biryani",
        price: 110,
        categories: ["all", "lunch", "chinese"],
        image: "chettinad-gobi-biryani.jpg",
        canteens: KC_ONLY
    },

    // Southern Exclusive
    {
        id: "hyderabadi-veg-biryani",
        name: "Hyderabadi Veg Biryani",
        price: 110,
        categories: ["all", "lunch", "chinese"],
        image: "hyderabadi-veg-biryani.jpg",
        canteens: SOUTHERN_ONLY
    }
];

const northIndian = [
    {
        id: "naan",
        name: "Naan",
        price: 25,
        categories: ["all", "lunch", "north-indian"],
        image: "naan.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        price: 110,
        categories: ["all", "lunch", "north-indian"],
        image: "paneer-butter-masala.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "kadai-paneer",
        name: "Kadai Paneer",
        price: 120,
        categories: ["all", "lunch", "north-indian"],
        image: "kadai-paneer.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "mushroom-masala",
        name: "Mushroom Masala",
        price: 110,
        categories: ["all", "lunch", "north-indian"],
        image: "mushroom-masala.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "dal-fry",
        name: "Dal Fry",
        price: 90,
        categories: ["all", "lunch", "north-indian"],
        image: "dal-fry.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "jeera-rice",
        name: "Jeera Rice",
        price: 70,
        categories: ["all", "lunch", "north-indian"],
        image: "jeera-rice.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "veg-pulao",
        name: "Veg Pulao",
        price: 80,
        categories: ["all", "lunch", "north-indian"],
        image: "veg-pulao.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    },
    {
        id: "chole-poori",
        name: "Chole Poori",
        price: 70,
        categories: ["all", "lunch", "north-indian"],
        image: "chole-poori.jpg",
        canteens: NORTH_INDIAN_CANTEENS
    }
];

const lunch = [
    {
        id: "veg-meals",
        name: "Veg Meals",
        price: 90,
        categories: ["all", "lunch"],
        image: "veg-meals.jpg",
        canteens: LUNCH_CANTEENS
    },
    {
        id: "mini-meals",
        name: "Mini Meals",
        price: 70,
        categories: ["all", "lunch"],
        image: "mini-meals.jpg",
        canteens: LUNCH_CANTEENS
    },
    {
        id: "variety-rice",
        name: "Variety Rice",
        price: 60,
        categories: ["all", "lunch"],
        image: "variety-rice.jpg",
        canteens: LUNCH_CANTEENS
    },
    {
        id: "veg-biryani",
        name: "Veg Biryani",
        price: 90,
        categories: ["all", "lunch"],
        image: "veg-biryani.jpg",
        canteens: LUNCH_CANTEENS
    },
    {
        id: "sambar-rice",
        name: "Sambar Rice",
        price: 50,
        categories: ["all", "lunch"],
        image: "sambar-rice.jpg",
        canteens: LUNCH_CANTEENS
    },
    {
        id: "curd-rice",
        name: "Curd Rice",
        price: 40,
        categories: ["all", "lunch"],
        image: "curd-rice.jpg",
        canteens: LUNCH_CANTEENS
    },
    {
        id: "variety-meals",
        name: "Variety Meals",
        price: 110,
        categories: ["all", "lunch"],
        image: "variety-meals.jpg",
        canteens: KC_ONLY
    }
];

const snacks = [
    {
        id: "veg-puff",
        name: "Veg Puff",
        price: 20,
        categories: ["all", "snacks"],
        image: "veg-puff.jpg",
        canteens: SNACK_CANTEENS
    },
    {
        id: "samosa",
        name: "Samosa",
        price: 15,
        categories: ["all", "snacks"],
        image: "samosa.jpg",
        canteens: SNACK_CANTEENS
    },
    {
        id: "veg-cutlet",
        name: "Veg Cutlet",
        price: 25,
        categories: ["all", "snacks"],
        image: "veg-cutlet.jpg",
        canteens: SNACK_CANTEENS
    },

    // KC Exclusives
    {
        id: "french-fries",
        name: "French Fries",
        price: 60,
        categories: ["all", "snacks"],
        image: "french-fries.jpg",
        canteens: KC_SNACKS
    },
    {
        id: "veg-sandwich",
        name: "Veg Sandwich",
        price: 50,
        categories: ["all", "snacks"],
        image: "veg-sandwich.jpg",
        canteens: KC_SNACKS
    },
    {
        id: "pav-bhaji",
        name: "Pav Bhaji",
        price: 70,
        categories: ["all", "snacks"],
        image: "pav-bhaji.jpg",
        canteens: KC_SNACKS
    },
    {
        id: "channa-masala",
        name: "Channa Masala",
        price: 50,
        categories: ["all", "snacks"],
        image: "channa-masala.jpg",
        canteens: KC_SNACKS
    },
    {
        id: "samosa-channa",
        name: "Samosa Channa",
        price: 40,
        categories: ["all", "snacks"],
        image: "samosa-channa.jpg",
        canteens: KC_SNACKS
    },

    {
    id: "paneer-puff",
    name: "Paneer Puff",
    price: 30,
    categories: ["all", "snacks"],
    image: "paneer-puff.jpg",
    canteens: VELAN_SNACKS
    },

    {
        id: "mushroom-puff",
        name: "Mushroom Puff",
        price: 30,
        categories: ["all", "snacks"],
        image: "mushroom-puff.jpg",
        canteens: VELAN_SNACKS
    }
];


const desserts = [
    {
        id: "ice-cream",
        name: "Ice Cream",
        price: 40,
        categories: ["all", "desserts"],
        image: "ice-cream.jpg",
        canteens: KC_DESSERTS
    },
    {
        id: "black-forest-cake",
        name: "Black Forest Cake",
        price: 45,
        categories: ["all", "desserts"],
        image: "black-forest-cake.jpg",
        canteens: VELAN_DESSERTS
    },
    {
        id: "red-velvet-cake",
        name: "Red Velvet Cake",
        price: 55,
        categories: ["all", "desserts"],
        image: "red-velvet-cake.jpg",
        canteens: VELAN_DESSERTS
    },
    {
        id: "vanilla-cake",
        name: "Vanilla Cake",
        price: 35,
        categories: ["all", "desserts"],
        image: "vanilla-cake.jpg",
        canteens: VELAN_DESSERTS
    },
    {
        id: "brownie",
        name: "Chocolate Brownie",
        price: 40,
        categories: ["all", "desserts"],
        image: "brownie.jpg",
        canteens: VELAN_DESSERTS
    }
];

const beverages = [
    {
        id: "tea",
        name: "Tea",
        price: 15,
        categories: ["all", "beverages"],
        image: "tea.jpg",
        canteens: BEVERAGE_CANTEENS
    },
    {
        id: "coffee",
        name: "Coffee",
        price: 20,
        categories: ["all", "beverages"],
        image: "coffee.jpg",
        canteens: BEVERAGE_CANTEENS
    },
    {
        id: "lemon-juice",
        name: "Lemon Juice",
        price: 25,
        categories: ["all", "beverages"],
        image: "lemon-juice.jpg",
        canteens: BEVERAGE_CANTEENS
    },
    {
        id: "paneer-soda",
        name: "Paneer Soda",
        price: 30,
        categories: ["all", "beverages"],
        image: "paneer-soda.jpg",
        canteens: BEVERAGE_CANTEENS
    },
    {
        id: "rose-milk",
        name: "Rose Milk",
        price: 30,
        categories: ["all", "beverages"],
        image: "rose-milk.jpg",
        canteens: BEVERAGE_CANTEENS
    },
    {
        id: "water-bottle",
        name: "Water Bottle",
        price: 20,
        categories: ["all", "beverages"],
        image: "water-bottle.jpg",
        canteens: BEVERAGE_CANTEENS
    },
    {
        id: "nannari-sarbath",
        name: "Nannari Sarbath",
        price: 30,
        categories: ["all", "beverages"],
        image: "nannari-sarbath.jpg",
        canteens: KC_BEVERAGES
    }
];

const MENU = [
    ...breakfast,
    ...chinese,
    ...northIndian,
    ...lunch,
    ...snacks,
    ...desserts,
    ...beverages
];

export { MENU };