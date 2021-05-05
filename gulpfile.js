// Initialize Modules
const fs = require('fs');
const gulp = require('gulp');
const { src, dest, watch, series } = require('gulp');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const inlinesource = require('gulp-inline-source-html');
const nunjucksRender = require('gulp-nunjucks-render');
const minifyHTML = require('gulp-htmlmin');

// File Path Variables
const paths = {
    dist: './dist',
    source: './src',
    scssPath: './src/**/**/*.scss',
    scssTemplatePath: './src/**/assets/style/**/*.scss',
    templatePath: './src/**/*.+(html|nunjucks|njk)'
}

// Sass task
function scssTask() {
    return src(paths.scssPath)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
}

// Html Task
function htmlTask() {
    return src(paths.templatePath)
        .pipe(inlinesource())
        .pipe(nunjucksRender({
            path: ['src/']
        }))
        .pipe(minifyHTML({ 
            collapseWhitespace: true,
            caseSensitive: true,
            minifyCSS: true,
            removeComments: true
        }))
        .pipe(dest(paths.dist));
}

function cleanDist() {
    return src('./dist', { read: false, allowEmpty: true })
        .pipe(clean());
}

// browser Sync: To Initialize
function serve(done) {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: './dist',
        }
    });
    done();
}

// browser Sync: To Reload
function reload(done) {
    browserSync.reload();
    done();
}

// watch task
function watchTask() {
    watch([paths.scssPath, paths.templatePath],
        series(scssTask, htmlTask, reload)
    );
}

// #########################################################
// Default Tasks =======================================
// #########################################################
exports.default = series(
    scssTask,
    htmlTask,
    reload,
    serve,
    watchTask
);

exports.clean = series( cleanDist );