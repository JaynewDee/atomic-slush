type Recipe = {
    name: string,
    ingredients: Ingredient[]
    frozen: boolean
}

type Ingredient = {
    name: string,
    volume_liters?: number,
    volume_cups?: number,
    // grams
    weight?: number
}

type IngredientRecipe = {
    name: string,
    ingredients: Ingredient[],
    instructions: string[]
};

const recipes: Recipe[] = [
    {
        name: "Classic Margarita",
        ingredients: [
            {
                name: "Tequila",
                volume_liters: 3
            },
            {
                name: "Lime",
                volume_liters: 1.5
            },
            {
                name: "Sugar",
                volume_liters: 1.5
            },
            {
                name: "Orange Liqueur",
                volume_liters: 1
            },
            {
                name: "Water",
                volume_liters: 2
            }
        ],
        frozen: true
    },
    {
        name: "Pina Colada",
        ingredients: [
            {
                name: "Coconut Rum",
                volume_liters: 2.5
            },
            {
                name: "Coconut Cream",
                volume_liters: 1.84
            },
            {
                name: "Pineapple Juice",
                volume_liters: 1.63
            },
            {
                name: "Lime Juice",
                volume_liters: 0.4
            },
            {
                name: "Water",
                volume_liters: 2
            },
            {
                name: "Ticaloid Powder",
                weight: 33
            },
        ],
        frozen: true
    },
    {
        name: "Paloma",
        ingredients: [
            {
                name: "Tequila",
                volume_liters: 1.62
            },
            {
                name: "Orange Liqueur",
                volume_liters: 0.54
            },
            {
                name: "Grapefruit Juice",
                volume_liters: 2.55
            },
            {
                name: "Simple Syrup",
                volume_liters: 1.08
            },
            {
                name: "Lime Juice",
                volume_liters: 1.08
            },
            {
                name: "Water",
                volume_liters: 2.16
            },
        ],
        frozen: true
    }
]

const ingredientRecipes: IngredientRecipe[] = [
    {
        name: "Coconut Cream",
        ingredients: [
            {
                name: "Coconut Milk",
                volume_cups: 24
            },
            {
                name: "Desiccated Coconut",
                volume_cups: 12
            },
            {
                name: "Turbinado",
                volume_cups: 28
            },
            {
                name: "Water",
                volume_cups: 4
            }
        ],
        instructions: [
            "Bring coconut milk, water, sugar and desiccated coconut to a boil in saucepan.",
            "Simmer on low/medium heat for 15 minutes, stirring consistently to ensure all sugar is dissolved and not burning on the bottom of the pot.",
            "Remove from heat.",
            "Add mixture in increments to a blender and blend.",
            "Strain mixture through fine sieve and press to extract all liquid.",
            "Repeat until all liquid has been used.",
            "Store, refridgerated, until use."
        ]
    }
]