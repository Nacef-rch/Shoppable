// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/product'],
    collectCoverageFrom: [
        '<rootDir>/projects/product/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
