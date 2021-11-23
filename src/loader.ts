const path = require('path');
const mix = require('laravel-mix');

mix.extend('i18n', new class {
    webpackRules() {
        return {
            test: path.resolve(__dirname, './lang.js'),
            loader: path.resolve(__dirname, './loader-import.js'),
        }
    }
})
