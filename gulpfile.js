//Base  Gulp functionality
var gulp = require('gulp');
//Gulp watch tast functionality
var watch = require('gulp-watch');
//Main postcss install
var postcss = require('gulp-postcss');
//Browser specific prefixing
var autoPrefixer = require('autoprefixer');
//CSS variable support
var cssVars = require('postcss-simple-vars');
//Allows CSS nesting
var nested = require('postcss-nested');
//Allows import to be ignored and replaced with CSS from the CSS module 
var cssImport = require('postcss-import');

gulp.task('default', function(){
    console.log("We created a gulp task.");
});

gulp.task('html', function(){
    console.log("Imagine something useful being done to your html here.");
});

//Automate PostCSS creation
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, nested, autoPrefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});

