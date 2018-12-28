//Base  Gulp functionality
var gulp = require('gulp');
//Gulp watch task functionality
var watch = require('gulp-watch');
//Browser Sync
var browserSync = require('browser-sync').create();

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