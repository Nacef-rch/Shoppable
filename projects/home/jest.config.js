// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/home'],
    collectCoverageFrom: ['<rootDir>/projects/home/**/*.ts', '!**/*.module.ts', '!**/*.stories.ts']
};
