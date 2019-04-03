module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['<rootDir>/client/**/*.js'],
    coverageDirectory: 'coverage',
    roots: [
        '<rootDir>'
    ],
    setupFilesAfterEnv: ['<rootDir>/enzymeSetup.js'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/mock-module.js'
    },
    snapshotSerializers: ['enzyme-to-json/serializer']
};
