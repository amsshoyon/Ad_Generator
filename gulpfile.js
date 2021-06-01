// Initialize Modules
const fs = require('fs');
const gulp = require('gulp');
const {src, dest, watch, series} = require('gulp');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
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
    templatePath: './src/**/*.+(html|nunjucks|njk)',
    indexCss: './src/index.css',
    indexScss: './src/index.scss',
    projectCss: './src/**/assets/style/*.+(css|map)',
    VendoProjectCss: './src/**/assets/vendor/*.css',
    imageSrcPath: './src/**/assets/images/*.{jpg,jpeg,png,svg}',
    imageDistPath: './dist'
}

// Sass task
function scssTask() {
    const autoprefixBrowsers = ['> 1%', 'last 50 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
    const plugins = [
        autoprefixer({overrideBrowserslist: autoprefixBrowsers}),
        cssnano()
    ]

    return src(paths.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
}

// SrcIndexScss Task
function srcIndexScss() {
    const autoprefixBrowsers = ['> 1%', 'last 50 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
    const plugins = [
        autoprefixer({overrideBrowserslist: autoprefixBrowsers}),
        cssnano()
    ]

    return src(paths.indexScss, {sourcemaps: true})
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/'), {sourcemaps: '.'})
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

//Image Task
function imageTask() {
    return src(paths.imageSrcPath)
        .pipe(gulp.dest(paths.imageDistPath))
}

// Clean Dist Folder
function cleanDist() {
    return src(paths.dist, {read: false, allowEmpty: true})
        .pipe(clean());
}

// Clean './src/index.css' File
function cleanIndexCss() {
    return src(paths.indexCss, {read: false, allowEmpty: true})
        .pipe(clean());
}

// Clean './src/**/assets/style/**/*.css' File
function cleanProjectCss() {
    return src(paths.projectCss, {read: false, allowEmpty: true})
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
    watch([paths.scssPath,paths.imageSrcPath, paths.indexScss, paths.templatePath],
        series(scssTask,imageTask, htmlTask, reload, srcIndexScss)
    );
}

// #########################################################
// Default Tasks =======================================
// #########################################################
exports.default = series(
    scssTask,
    srcIndexScss,
    imageTask,
    htmlTask,
    reload,
    serve,
    watchTask
);

exports.clean = series(cleanDist, cleanIndexCss, cleanProjectCss);