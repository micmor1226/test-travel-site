var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {
    mode: {
        css: { /*Creates folder called css with svg folder inside and the sprite.css file in it*/
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
