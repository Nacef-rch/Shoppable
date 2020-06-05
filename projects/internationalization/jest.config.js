// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',
    roots: ['<rootDir>/projects/internationalization'],

    collectCoverageFrom: [
        '<rootDir>/projects/internationalization/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
