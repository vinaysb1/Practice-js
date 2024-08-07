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

// example-2
const javascript = {
    name: 'JavaScript',
    paradigm: 'Multi-paradigm: object-oriented, imperative, functional',
    features: {
        typing: 'Dynamic',
        platform: 'Cross-platform',
        frameworks: {
            frontend: {
                popular: ['React', 'Vue.js', 'Angular'],
                emerging: ['Svelte', 'Next.js', 'Ember.js']
            },
            backend: {
                popular: ['Node.js', 'Express.js', 'Koa'],
                emerging: ['Deno', 'Nest.js', 'Fastify']
            }
        },
        testing: {
            frameworks: ['Jest', 'Mocha', 'Cypress'],
            methodologies: ['Unit Testing', 'Integration Testing', 'End-to-End Testing']
        },
        community: {
            forums: ['Stack Overflow', 'Dev.to', 'Reddit'],
            websites: ['MDN Web Docs', 'JavaScript.com', 'Medium'],
            conferences: {
                global: ['JSConf', 'Node.js Interactive'],
                regional: ['React Europe', 'ng-conf']
            }
        }
    }
};

// Accessing specific details
console.log(javascript.name);  // JavaScript
console.log(javascript.features.typing);  // Dynamic
console.log(javascript.features.frameworks.frontend.popular);  // ['React', 'Vue.js', 'Angular']
console.log(javascript.features.testing.methodologies[1]);  // Integration Testing
console.log(javascript.features.community.conferences.regional[0]);  // React Europe

//example-3
const originalGame = {
    title: 'Red Dead Redemption 2',
    platform: 'PlayStation 4',
    genre: 'Action-Adventure',
    developer: 'Rockstar Games',
    releaseYear: 2018,
    ratings: {
        critic: 97,
        user: 92
    },
    characters: [
        {
            name: 'Arthur Morgan',
            occupation: 'Outlaw'
        },
        {
            name: 'John Marston',
            occupation: 'Cowboy'
        }
    ],
    locations: {
        primary: 'New Hanover',
        secondary: 'Lemoyne'
    }
};

// Select specific properties and create a new object with modified values and additional properties
const { title, platform, ratings, characters, ...rest } = originalGame;
const newGame = {
    ...rest,
    title: `${title} - Enhanced Edition`,
    platform: `${platform} Pro`,
    ratings: { ...ratings, critic: ratings.critic + 5 },
    characters: characters.map((character) => ({ ...character, status: 'alive' })),
    locations: { ...originalGame.locations, tertiary: 'West Elizabeth' },
    features: ['Open World', 'Multiplayer']
};

console.log(newGame);


