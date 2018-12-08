//Base  Gulp functionality
var gulp = require('gulp');
//Gulp watch tast functionality
var watch = require('gulp-watch');
//Main postcss install
var postcss = require('gulp-postcss');
//Browser specific prefixing
var autoprefixer = require('autoprefixer');
//CSS variable support
var cssvars = require('postcss-simple-vars');
//Allows CSS nesting
var nested = require('postcss-nested');

gulp.task('default', function(){
    console.log("We created a gulp task.");
});

gulp.task('html', function(){
    console.log("Imagine something useful being done to your html here.");
});

//Automate PostCSS creation
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
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

