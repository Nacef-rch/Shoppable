// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',

    roots: ['<rootDir>/projects/authentication'],
    collectCoverageFrom: [
        '<rootDir>/projects/authentication/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
