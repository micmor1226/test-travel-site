//Base  Gulp functionality
var gulp = require('gulp');
//Gulp watch task functionality
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
//Browser Sync
var browserSync = require('browser-sync').create();

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

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });

});

//This task will only run after the 'styles' task is run.
//Brackets signify dependencies
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
