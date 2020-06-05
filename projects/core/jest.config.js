// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',
    roots: ['<rootDir>/projects/core'],
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/projects/core/src/lib/$1'
    },
    collectCoverageFrom: ['<rootDir>/projects/core/**/*.ts', '!**/*.module.ts', '!**/*.stories.ts']
};
