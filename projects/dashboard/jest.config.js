// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/dashboard'],
    collectCoverageFrom: [
        '<rootDir>/projects/dashboard/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
