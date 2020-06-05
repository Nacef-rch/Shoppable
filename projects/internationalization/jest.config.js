// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',
    roots: ['<rootDir>/projects/internationalization'],
    moduleNameMapper: {
        '^@i18n/(.*)$': '<rootDir>/projects/internationalization/src/lib/$1'
    },
    collectCoverageFrom: [
        '<rootDir>/projects/internationalization/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
