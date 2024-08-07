const originalGame = {
    title: 'The Witcher 3: Wild Hunt',
    platform: 'PlayStation 4',
    genre: 'Action RPG',
    developer: 'CD Projekt Red',
    releaseYear: 2015,
    ratings: {
        critic: 93,
        user: 92
    },
    characters: [
        {
            name: 'Geralt of Rivia',
            profession: 'Witcher'
        },
        {
            name: 'Yennefer of Vengerberg',
            profession: 'Sorceress'
        },
        {
            name: 'Ciri',
            profession: 'Princess of Cintra'
        }
    ],
    DLCs: [
        {
            name: 'Hearts of Stone',
            releaseYear: 2015
        },
        {
            name: 'Blood and Wine',
            releaseYear: 2016
        }
    ]
};

// Select specific properties and create a new object with modifications
const { title, platform, ratings, characters, ...rest } = originalGame;
const newGame = {
    ...rest,
    title: `${title} (Complete Edition)`,
    platform: platform.toUpperCase(),
    ratings: { ...ratings },
    characters: characters.map((character) => ({
        ...character,
        profession: character.profession.toUpperCase()
    })),
    DLCs: originalGame.DLCs.map((dlc) => ({
        ...dlc,
        releaseYear: dlc.releaseYear + 1
    }))
};

console.log(newGame);

// example-2
const groups = [
    {
        groupName: "Admins",
        description: "Group with administrative privileges",
        members: ["user1@example.com", "user2@example.com"]
    },
    {
        groupName: "Developers",
        description: "Group with development access",
        members: ["user3@example.com", "user4@example.com", "user5@example.com"]
    },
    {
        groupName: "Support",
        description: "Group with support access",
        members: ["user6@example.com", "user7@example.com"]
    }
];

// Accessing and using the group properties
for (const group of groups) {
    console.log("Group Name:", group.groupName);
    console.log("Description:", group.description);
    console.log("Members:", group.members);
    console.log("-------------------------------------");
}

// example-3
const groups2 = [
    {
        groupName: "Admins",
        description: "Group with administrative privileges",
        members: ["user1@example.com", "user2@example.com"],
        policies: ["AdminPolicy"]
    },
    {
        groupName: "Developers",
        description: "Group with development access",
        members: ["user3@example.com", "user4@example.com", "user5@example.com"],
        policies: ["DevPolicy"]
    },
    {
        groupName: "Support",
        description: "Group with support access",
        members: ["user6@example.com", "user7@example.com"],
        policies: ["SupportPolicy"]
    }
];

// Accessing and using the group properties
for (const group of groups2) {
    console.log("Group Name:", group.groupName);
    console.log("Description:", group.description);
    console.log("Members:", group.members);
    console.log("Policies:", group.policies);
    console.log("-------------------------------------");
}