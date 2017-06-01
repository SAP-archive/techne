import { join } from 'path';

export const TechneVersion = require('../../package.json').version;

export const TechneSourceBanner =
    '/*\n' +
    '    SAP Techné version ' + TechneVersion + '\n' +
    '    https://techne.yaas.io | techne@sap.com\n' +
    '    https://github.com/SAP/techne\n' +
    '    License: Apache License 2.0\n' +
    '*/\n';

export const TechneDist = join(__dirname, '../../dist/techne' /* , TechneVersion */);

export const TechneCompiledFilename = 'techne.min.css';

export const TechneSassPaths = [
    './src/techne/**/*.scss'
]

export const TechneCssComponentPaths = [
    TechneDist + '/**/*.css'
]

export const SassConfig = {
    outputStyle: 'compact',
    includePaths: [
        './src/techne'
    ]
}

export const MinimizeRenameConfig = {
    suffix: ".min"
}

export const CleanCSSConfig = {
    level: {
        1: {
            cleanupCharsets: true, // controls `@charset` moving to the front of a stylesheet; defaults to `true`
            normalizeUrls: true, // controls URL normalization; defaults to `true`
            optimizeBackground: true, // controls `background` property optimizations; defaults to `true`
            optimizeBorderRadius: true, // controls `border-radius` property optimizations; defaults to `true`
            optimizeFilter: true, // controls `filter` property optimizations; defaults to `true`
            optimizeFont: true, // controls `font` property optimizations; defaults to `true`
            optimizeFontWeight: true, // controls `font-weight` property optimizations; defaults to `true`
            optimizeOutline: true, // controls `outline` property optimizations; defaults to `true`
            removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
            removeNegativePaddings: true, // controls removing negative paddings; defaults to `true`
            removeQuotes: true, // controls removing quotes when unnecessary; defaults to `true`
            removeWhitespace: true, // controls removing unused whitespace; defaults to `true`
            replaceMultipleZeros: true, // contols removing redundant zeros; defaults to `true`
            replaceTimeUnits: true, // controls replacing time units with shorter values; defaults to `true`
            replaceZeroUnits: true, // controls replacing zero values with units; defaults to `true`
            roundingPrecision: false, // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
            selectorsSortingMethod: 'standard', // denotes selector sorting method; can be `'natural'` or `'standard'`, `'none'`, or false (the last two since 4.1.0); defaults to `'standard'`
            specialComments: 'all', // denotes a number of /*! ... */ comments preserved; defaults to `all`
            tidyAtRules: true, // controls at-rules (e.g. `@charset`, `@import`) optimizing; defaults to `true`
            tidyBlockScopes: true, // controls block scopes (e.g. `@media`) optimizing; defaults to `true`
            tidySelectors: true // controls selectors optimizing; defaults to `true`
        },
        2: {
            mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
            mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
            mergeMedia: true, // controls `@media` merging; defaults to true
            mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
            mergeSemantically: false, // controls semantic merging; defaults to false
            overrideProperties: true, // controls property overriding based on understandability; defaults to true
            removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
            reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
            removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
            removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
            removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
            removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
            restructureRules: false // controls rule restructuring; defaults to false
        }
    }
}
