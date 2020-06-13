// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',
    roots: ['<rootDir>/projects/shared'],

    collectCoverageFrom: [
        '<rootDir>/projects/shared/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
