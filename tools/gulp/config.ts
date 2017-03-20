import { join } from 'path';

export const TechneVersion = require('../../package.json').version;

export const TechneDist = join(__dirname, '../../dist/techne', TechneVersion);

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