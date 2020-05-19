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
    collectCoverageFrom: [
        '**/src/**/*.ts',
        '**/projects/**/*.ts',
        '!**/node_modules/**',
        '!**/src/**/*.module.ts',
        '!reports/**',
        '!**/polyfills.ts',
        '!**/environments/**',
        '!jest/**',
        '!**/*.module.ts',
        '!**/*.stories.ts',
    ],

    coverageReporters: ['json', 'lcov', 'html', 'text'],
    //TODO: change Coverage path for libs
    collectCoverageFrom: ['<rootDir>/src/app/**/*.ts', '!**/*.module.ts', '!**/*.stories.ts'],
    coverageDirectory: '<rootDir>/reports',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
};
