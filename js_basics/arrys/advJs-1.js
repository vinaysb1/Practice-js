// const rust_features = [
//     "Zero cost abstraction",
//     "Error messages",
//     "Move semantics",
//     "Threads without data races",
//     "Pattern matching",
//     "Guaranteed memory safety",
//     "Efficient C bindings",
//     "Safe memory space allocation",
//     "Minimal time",
// ]


// for (let i = 0; i < rust_features.length; i++) {
//     console.log(rust_features[i]);
// }
// example-2
const rustFeatures = {
    name: 'Rust',
    paradigm: 'Multi-paradigm: imperative, functional, concurrent',
    memorySafety: true,
    zeroCostAbstractions: true,
    staticTyping: true,
    ownershipModel: 'Borrowing and lifetimes',
    patternMatching: true,
    concurrencySupport: true,
    asyncAwaitSyntax: true,
    compilation: 'Ahead-of-time (AOT)',
    packageManager: 'Cargo',
    toolchainManagement: 'rustup',
    crossPlatform: true,
    interopWithC: true,
    documentation: 'rustdoc',
    testingFramework: 'rustc-test, third-party libraries (e.g., assert_eq! macro)',
    errorHandling: 'Result and Option types',
    patternMacros: true,
    functionalProgrammingFeatures: true,
    community: 'Active and growing',
    learningResources: {
        officialWebsite: 'https://www.rust-lang.org/',
        documentation: 'https://doc.rust-lang.org/',
        onlineBook: 'https://doc.rust-lang.org/book/',
        communityForum: 'https://users.rust-lang.org/',
        packageRegistry: 'https://crates.io/'
    }
};

for (const feature in rustFeatures) {
    if (typeof rustFeatures[feature] !== 'object') {
        console.log(`${feature}: ${rustFeatures[feature]}`);
    } else {
        console.log(`${feature}:`);
        for (const subFeature in rustFeatures[feature]) {
            console.log(`  ${subFeature}: ${rustFeatures[feature][subFeature]}`);
        }
    }
}