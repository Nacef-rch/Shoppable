module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/Jest/setupJest.ts'],
    moduleNameMapper: {
        '^lodash-es$': 'lodash',
    },
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json',
            diagnostics: true,
            stringifyContentPathRegex: '\\.html$',
            astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')],
        },
    },
    testMatch: ['<rootDir>/**/**/*.spec.ts'],
    testResultsProcessor: 'jest-sonar-reporter',

    coverageReporters: ['json', 'lcov', 'html', 'text'],
    //TODO: change Coverage path for libs
    collectCoverageFrom: [
        '<rootDir>/src/app/**/*.ts',
        '<rootDir>/projects/**/*.ts',
        '!**/polyfills.ts',
        '!**/environments/**',
        '!<rootDir>/Jest/**',
        '!<rootDir>/reports/**',
        '!**/*.module.ts',
        '!**/*.stories.ts',
    ],
    coverageDirectory: '<rootDir>/reports',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
};
