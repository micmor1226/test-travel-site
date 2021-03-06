//Base  Gulp functionality
var gulp = require('gulp');
//Main postcss install
var postcss = require('gulp-postcss');
//Browser specific prefixing
var autoPrefixer = require('autoprefixer');
//Css Mixins. Reusable bit of code 
var mixins = require('postcss-mixins');
//CSS variable support
var cssVars = require('postcss-simple-vars');
//Allows CSS nesting
var nested = require('postcss-nested');
//Allows import to be ignored and replaced with CSS from the CSS module
//We don't want the browser downloading extra files, we want PostCSS to add in the CSS directly from the modules
//cssImport tells the browser to ignore @import as normally it would be valid CSS
var cssImport = require('postcss-import');
//Allows you to declare rgba() function with a hexidecimal color value as opposed to rgba. Also allows that value to be stored in a variable.
var hexrgba = require('postcss-hexrgba');


//Automate PostCSS creation
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoPrefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});