// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../../jest.config');

module.exports = {
    ...baseConfig,
    rootDir: '../..',
    roots: ['<rootDir>/projects/shared'],
    moduleNameMapper: {
        '^@shared/(.*)$': '<rootDir>/projects/shared/src/lib/$1'
    },
    collectCoverageFrom: [
        '<rootDir>/projects/shared/**/*.ts',
        '!**/*.module.ts',
        '!**/*.stories.ts'
    ]
};
