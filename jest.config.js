module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/Jest/setupJest.ts'],
    moduleNameMapper: {
        '^lodash-es$': 'lodash'
    },
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json',
            diagnostics: true,
            stringifyContentPathRegex: '\\.html$',
            astTransformers: [
                require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')
            ]
        }
    },
    moduleNameMapper: {
        '^@authentication/(.*)$': '<rootDir>/projects/authentication/src/lib/$1',
        '^@shared/(.*)$': '<rootDir>/projects/shared/src/lib/$1',
        '^@core/(.*)$': '<rootDir>/projects/core/src/lib/$1',
        '^@authentication/(.*)$': '<rootDir>/projects/authentication/src/lib/$1',
        '^@i18n/(.*)$': '<rootDir>/projects/internationalization/src/lib/$1',
        '^@dash/(.*)$': '<rootDir>/projects/dashboard/src/lib/$1',
        '^@product/(.*)$': '<rootDir>/projects/product/src/lib/$1',
        '^@store/(.*)$': '<rootDir>/projects/store/src/lib/$1',
        '^@layout/(.*)$': '<rootDir>/projects/store/src/lib/$1',
        '^@env/(.*)$': '<rootDir>/src/environments/$1'
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
        '!**/*.mock.ts',
        '!**/*.stories.ts',
        '!**/+store/**/*.actions.ts',
        '!**/+store/**/*.selectors.ts',
        '!**/public-api.ts'
    ],
    coverageDirectory: '<rootDir>/reports',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules']
};
