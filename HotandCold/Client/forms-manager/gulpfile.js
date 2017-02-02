"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run a local dev server
var open = require('gulp-open'); // open a url in a web browser
var browserify = require('browserify'); // bundles JS
var reactify = require('reactify'); // transforms React JSX to JS
var source = require('vinyl-source-stream'); // use conventional text streams with gulp
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: ['./src/**/*.js',
             'node_modules/jquery/dist/jquery.js',
             'node_modules/material-design-lite/material.min.js'],
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css',
            'node_modules/material-design-lite/material.min.css',
            './src/style.css'
        ],
        dist: './dist',
        mainJS: './src/main.js'
    }
};

//start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        basePath: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open',['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJS)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
})

gulp.task('eslint', function() {
    return gulp.src(config.paths.js)
        .pipe(eslint({configFile: 'eslint.config.json'}))
        .pipe(eslint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'connect', 'watch']);