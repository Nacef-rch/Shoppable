// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/webuilder'],
    collectCoverageFrom: [
        '<rootDir>/projects/webuilder/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
