//Base  Gulp functionality
var gulp = require('gulp');
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
//Css Mixins. Reusable bit of code 
var mixins = require('postcss-mixins');

//Automate PostCSS creation
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, autoPrefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});