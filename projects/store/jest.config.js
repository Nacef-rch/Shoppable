// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/store'],
    collectCoverageFrom: ['<rootDir>/projects/store/**/*.ts', '!**/*.module.ts', '!**/*.stories.ts']
};
