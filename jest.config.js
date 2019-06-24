module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    snapshotSerializers: [
        "<rootDir>/node_modules/jest-serializer-vue"
    ]
}