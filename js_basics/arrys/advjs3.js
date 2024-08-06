const data = [
    {
        category: 'Fruit',
        items: [
            {
                name: 'Apple',
                color: 'Red',
                details: {
                    origin: 'North America',
                    nutrition: {
                        calories: 52,
                        fat: 0.2,
                        carbs: 14,
                        fiber: 2.4
                    }
                }
            },
            {
                name: 'Banana',
                color: 'Yellow',
                details: {
                    origin: 'Tropical regions',
                    nutrition: {
                        calories: 96,
                        fat: 0.2,
                        carbs: 23,
                        fiber: 2.6
                    }
                }
            }
        ]
    },
    {
        category: 'Vegetable',
        items: [
            {
                name: 'Carrot',
                color: 'Orange',
                details: {
                    origin: 'Europe',
                    nutrition: {
                        calories: 41,
                        fat: 0.2,
                        carbs: 10,
                        fiber: 2.8
                    }
                }
            },
            {
                name: 'Broccoli',
                color: 'Green',
                details: {
                    origin: 'Italy',
                    nutrition: {
                        calories: 55,
                        fat: 0.6,
                        carbs: 11,
                        fiber: 3.6
                    }
                }
            }
        ]
    }
];

// Accessing specific data
console.log(data[0].items[0]);  // Apple
console.log(data[1].items[1]);  // Broccoli
console.log(data[0].items[1].details.nutrition.fiber);  //  2.6