import { join } from 'path';

export const TechneVersion = require('../../package.json').version;

export const TechneSourceBanner = 
    '/*\n'+ 
    '    SAP Techné version ' + TechneVersion + '\n' +
    '    https://techne.yaas.io | techne@sap.com\n' +
    '    https://github.com/SAP/techne\n' +
    '    License: Apache License 2.0\n' +
    '*/\n';

export const TechneDist = join(__dirname, '../../dist/techne' /* , TechneVersion */ );

export const TechneCompiledFilename = 'techne.min.css';

export const TechneSassPaths = [
    './src/techne/**/*.scss'
]

export const TechneCssComponentPaths = [
    TechneDist + '/**/*.css'
]

export const SassConfig = {
    outputStyle: 'compressed'
}