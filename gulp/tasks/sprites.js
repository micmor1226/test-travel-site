var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: { /*Creates folder called css with svg folder inside and the sprite.css file in it*/
            sprite: 'sprite.svg', /*Outputs file, removes the .css from the background image url path*/
            render: { /*Render each icon in the sprite with . . .*/
                css: { /*css in this case. Could use SASS or LESS as well.*/
                    template: './gulp/templates/sprite.css' /*Provides a template to divy out individual images from the sprite file*/
                }
            }
        }
    }
}

gulp.task('createSprite', function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

/*Moves the sprite file to the main assets/images/sprites folder to be used.
This task depends on createSprite.*/
gulp.task('copySpriteGraphic', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

/*This task depends on createSprite.*/
gulp.task('copySpriteCSS', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']);