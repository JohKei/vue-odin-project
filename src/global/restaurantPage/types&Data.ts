export {
    menu,
    homeSlides
}

// Todo: Menu interface
const menu = [
    {
        "id": 1,
        "name": "Grilled Salmon with Lemon Butter Sauce",
        "description": "A succulent grilled salmon fillet topped with a tangy lemon butter sauce.",
        "price": "$19.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127170366377295882/john7094_Grilled_Salmon_with_Lemon_Butter_Sauce_f0d182b1-6d23-46da-8096-7d0ca5ab58c8.png",
        "origin": "North America",
        "category": "Meat"
    },
    {
        "id": 2,
        "name": "Margherita Pizza with Fresh Basil",
        "description": "Traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
        "price": "$12.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127170688143339630/john7094_Margherita_Pizza_with_Fresh_Basil_679e77e2-ce86-48df-be00-eabc18ca8f81.png",
        "origin": "Italy",
        "category": "Vegetarian"
    },
    {
        "id": 3,
        "name": "Chicken Alfredo Pasta with Garlic Bread",
        "description": "Creamy Alfredo sauce tossed with grilled chicken and served with garlic bread.",
        "price": "$15.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127170997494222848/john7094_Chicken_Alfredo_Pasta_with_Garlic_Bread_c1de4b6f-012c-4530-a81d-4526a8324dc5.png",
        "origin": "Italy",
        "category": "Meat"
    },
    {
        "id": 4,
        "name": "Caesar Salad with Grilled Chicken",
        "description": "Crisp romaine lettuce, grilled chicken, Parmesan cheese, and homemade Caesar dressing.",
        "price": "$10.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127171246963036241/john7094_Caesar_Salad_with_Grilled_Chicken_732e8d13-605a-4ab6-9bcf-f25011707dd8.png",
        "origin": "Mexico",
        "category": "Meat"
    },
    {
        "id": 5,
        "name": "Beef Burger with Caramelized Onions and Cheddar Cheese",
        "description": "Juicy beef patty topped with caramelized onions, melted cheddar cheese, and served with fries.",
        "price": "$13.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127171564878696448/john7094_Beef_Burger_with_Caramelized_Onions_and_Cheddar_Cheese_51407f5f-39d9-4bad-b5e5-a4eac56db1d7.png",
        "origin": "United States",
        "category": "Meat"
    },
    {
        "id": 6,
        "name": "Vegetable Stir-Fry with Tofu",
        "description": "A medley of fresh vegetables and tofu stir-fried to perfection in a savory sauce.",
        "price": "$11.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127172173535117442/john7094_Vegetable_Stir-Fry_with_Tofu_62adaa9b-7322-4edf-8041-420118c2bb81.png",
        "origin": "China",
        "category": "Vegetarian"
    },
    {
        "id": 7,
        "name": "Spicy Buffalo Wings with Blue Cheese Dip",
        "description": "Crispy chicken wings coated in spicy buffalo sauce, served with a side of tangy blue cheese dip.",
        "price": "$9.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127172441546948709/john7094_Spicy_Buffalo_Wings_with_Blue_Cheese_Dip_c48be648-6bea-4a4c-b2d3-bda55e2d518b.png",
        "origin": "United States",
        "category": "Meat"
    },
    {
        "id": 8,
        "name": "Shrimp Scampi with Linguine",
        "description": "Tender shrimp sautéed in garlic butter sauce, served over a bed of linguine pasta.",
        "price": "$17.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127172759202562141/john7094_Shrimp_Scampi_with_Linguine_591786f4-040b-49a6-96ef-1b0aa1aacea8.png",
        "origin": "Italy",
        "category": "Meat"
    },
    {
        "id": 9,
        "name": "Mushroom Risotto with Truffle Oil",
        "description": "Creamy risotto cooked with assorted mushrooms and drizzled with aromatic truffle oil.",
        "price": "$14.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127173443469713488/john7094_Mushroom_Risotto_with_Truffle_Oil_b23e3e58-72a8-4739-b2ee-d4a261b63711.png",
        "origin": "Italy",
        "category": "Vegetarian"
    },
    {
        "id": 10,
        "name": "Tiramisu Dessert with Espresso Soaked Ladyfingers",
        "description": "Classic Italian dessert made with layers of espresso-soaked ladyfingers and mascarpone cream.",
        "price": "$8.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127173722999103508/john7094_Tiramisu_Dessert_with_Espresso_Soaked_Ladyfingers_20895511-2c1b-45e9-9cae-eb1f4f9471b9.png",
        "origin": "Italy",
        "category": "Vegetarian"
    },
    {
        "id": 11,
        "name": "Vegan Lentil Curry with Basmati Rice",
        "description": "A flavorful blend of lentils, vegetables, and spices, served with fragrant basmati rice.",
        "price": "$12.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127174300366012447/john7094_Vegan_Lentil_Curry_with_Basmati_Rice_74619cd0-5df4-4a91-8fd1-12a708b27fe1.png",
        "origin": "Various",
        "category": "Vegan"
    },
    {
        "id": 12,
        "name": "Vegan Buddha Bowl with Quinoa and Roasted Veggies",
        "description": "A nourishing bowl packed with quinoa, roasted vegetables, avocado, and a zesty dressing.",
        "price": "$10.99",
        "image": "https://cdn.discordapp.com/attachments/1059907690383544413/1127174638192042024/john7094_Vegan_Buddha_Bowl_with_Quinoa_and_Roasted_Veggies_2e473df0-726b-4aaa-955e-0d568a4fb030.png",
        "origin": "Various",
        "category": "Vegan"
    }
]

// Todo: homeSlides -> slideTitle, slideDescription
// Todo: homeSlides interface
const homeSlides = [
    {
        title: 'Enjoyable',
        smallTitle: 'Wine and Dine',
        image: 'https://cdn.discordapp.com/attachments/1059907690383544413/1124977784264077343/john7094_photorealistic_beautiful_people_enjoying_food_in_this__d13c016e-1149-4ef0-a4a9-5ad7e891ddca.png'
    },
    {
        title: 'Delicious',
        smallTitle: 'Crispy and Soft',
        image: 'https://cdn.discordapp.com/attachments/1059907690383544413/1124339674580783104/john7094_a_beautiful_restaurant_photorealistic._this_is_this_re_e80e13f2-04d8-437f-b612-ce07a844ea31.png',
    },
    {
        title: 'Restaurant',
        smallTitle: 'Tasty and Crunchy',
        image: 'https://cdn.discordapp.com/attachments/1059907690383544413/1124340328149819472/john7094_photorealistic_beautiful_the_cooks_cooking_for_this_re_47f7bb14-3855-4cb6-875b-510895a917b3.png'
    }

]