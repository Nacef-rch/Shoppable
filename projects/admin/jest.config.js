// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/admin'],
    collectCoverageFrom: ['<rootDir>/projects/admin/**/*.ts', '!**/*.module.ts', '!**/*.stories.ts']
};
