// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/layout'],
    collectCoverageFrom: [
        '<rootDir>/projects/layout/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
