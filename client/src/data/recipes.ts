export type RecipeType = {
    id: number,
    name: string,
    ingredients: Ingredient[]
    frozen: boolean
}

type Ingredient = {
    name: string,
    volume_liters?: number,
    volume_cups?: number,
    weight?: number
}

export const recipes: RecipeType[] = [
    {
        id: 1,
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
        id: 2,
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
                name: "Pineapple",
                volume_liters: 1.63
            },
            {
                name: "Lime",
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
        id: 3,
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
                name: "Grapefruit",
                volume_liters: 2.55
            },
            {
                name: "Simple Syrup",
                volume_liters: 1.08
            },
            {
                name: "Lime",
                volume_liters: 1.08
            },
            {
                name: "Water",
                volume_liters: 2.16
            },
        ],
        frozen: true
    },
    {
        id: 4,
        name: "Strawberry Daiquiri",
        ingredients: [
            {
                name: "Rum",
                volume_liters: 2.04
            },
            {
                name: "Strawberry Cordial",
                volume_liters: 2.04
            },
            {
                name: "Lime",
                volume_liters: 0.69
            },
            {
                name: "Simple Syrup",
                volume_liters: 1.03
            },
            {
                name: "Water",
                volume_liters: 2.3
            }
        ],
        frozen: true
    },
    {
        id: 5,
        name: "Whiskey Sour",
        ingredients: [
            {
                name: "Whiskey",
                volume_liters: 3,
            },
            {
                name: "Coke",
                volume_liters: 1
            },
            {
                name: "Lime",
                volume_liters: 1
            },
            {
                name: "Water",
                volume_liters: 5
            }
        ],
        frozen: true
    },
    {
        id: 6,
        name: "Cosmo",
        ingredients: [
            {
                name: "Vodka",
                volume_liters: 1.4,
            },
            {
                name: "Orange Liqueur",
                volume_liters: 1.4
            },
            {
                name: "Lime",
                volume_liters: 1
            },
            {
                name: "Orange",
                volume_liters: .7
            },
            {
                name: "Simple Syrup",
                volume_liters: 1.4
            },
            {
                name: "Cranberry",
                volume_liters: 2.06
            },
            {
                name: "Water",
                volume_liters: 1.4
            }
        ],
        frozen: true
    }
]
