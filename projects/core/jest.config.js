// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',
    roots: ['<rootDir>/projects/core'],
    collectCoverageFrom: ['<rootDir>/projects/core/**/*.ts', '!**/*.module.ts', '!**/*.stories.ts']
};
