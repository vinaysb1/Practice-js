const programmingLanguages = [
    {
        name: 'Java',
        paradigm: 'Object-oriented, imperative',
        typing: 'Static',
        platform: 'Cross-platform',
        concurrencySupport: 'Threads, Executors, Fork/Join framework',
        librariesFrameworks: ['Spring', 'Hibernate', 'JUnit'],
        community: 'Large and active',
        learningResources: {
            officialWebsite: 'https://www.java.com/',
            documentation: 'https://docs.oracle.com/en/java/',
            onlineTutorials: 'https://docs.oracle.com/javase/tutorial/',
            communityForum: 'https://community.oracle.com/community/developer',
        },
    },
    {
        name: 'Python',
        paradigm: 'Multi-paradigm: object-oriented, imperative, functional',
        typing: 'Dynamic',
        platform: 'Cross-platform',
        concurrencySupport: 'Threads, asyncio',
        librariesFrameworks: ['Django', 'NumPy', 'Flask'],
        community: 'Vibrant and supportive',
        learningResources: {
            officialWebsite: 'https://www.python.org/',
            documentation: 'https://docs.python.org/',
            onlineTutorials: 'https://docs.python.org/tutorial/',
            communityForum: 'https://www.python.org/community/',
        },
    },
    {
        name: 'Go',
        paradigm: 'Concurrent, imperative',
        typing: 'Static',
        platform: 'Cross-platform',
        concurrencySupport: 'Goroutines, Channels',
        librariesFrameworks: ['Gin', 'Echo', 'GORM'],
        community: 'Active and growing',
        learningResources: {
            officialWebsite: 'https://golang.org/',
            documentation: 'https://golang.org/doc/',
            onlineTutorials: 'https://tour.golang.org/welcome/1',
            communityForum: 'https://forum.golangbridge.org/',
        },
    },
    {
        name: 'JavaScript',
        paradigm: 'Multi-paradigm: object-oriented, imperative, functional',
        typing: 'Dynamic',
        platform: 'Cross-platform',
        concurrencySupport: 'Asynchronous programming with Promises, async/await',
        librariesFrameworks: ['React', 'Node.js', 'Express.js'],
        community: 'Active and diverse',
        learningResources: {
            officialWebsite: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
            onlineTutorials: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            communityForum: 'https://stackoverflow.com/questions/tagged/javascript',
        },
    },
    {
        name: 'C++',
        paradigm: 'Multi-paradigm: procedural, object-oriented, generic',
        typing: 'Static',
        platform: 'Cross-platform',
        concurrencySupport: 'Threads, async/await with libraries',
        librariesFrameworks: ['STL', 'Boost', 'Qt'],
        community: 'Active and knowledgeable',
        learningResources: {
            officialWebsite: 'https://isocpp.org/',
            documentation: 'https://en.cppreference.com/',
            onlineTutorials: 'https://www.learncpp.com/',
            communityForum: 'https://www.reddit.com/r/cpp/',
        },
    },
];

// Accessing specific language's details
console.log(programmingLanguages[0]);  // Java
console.log(programmingLanguages[1]);  // Python
console.log(programmingLanguages[2]);  // Go
console.log(programmingLanguages[3]);  // JavaScript
console.log(programmingLanguages[4]);  // C++

for (let i = 0; i < programmingLanguages.length; i++) {
    const language = programmingLanguages[i];
    console.log(`Language: ${language.name}`);
    console.log(`Paradigm: ${language.paradigm}`);
    console.log(`Typing: ${language.typing}`);
    console.log(`Platform: ${language.platform}`);
//     console.log(`Concurrency Support: ${language.concurrencySupport}`);
//     console.log(`Libraries/Frameworks: ${language.librariesFrameworks.join(', ')}`);
//     console.log(`Community: ${language.community}`);
//     console.log(`Learning Resources:`);
//     console.log(`  Official Website: ${language.learningResources.officialWebsite}`);
//     console.log(`  Documentation: ${language.learningResources.documentation}`);
//     console.log(`  Online Tutorials: ${language.learningResources.onlineTutorials}`);
    console.log(`  Community Forum: ${language.learningResources.communityForum}`);
    console.log('\n');
// 

}