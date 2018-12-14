
var gulp = require('gulp');
//var uglify = require('gulp-uglify');
var sass = require('gulp-sass')



gulp.task('scss', function() {

    return gulp.src("./SCSS/martiBlog.scss")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});



// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('scss');

  // Watch files and run tasks if they change
//   gulp.watch('client/js/**', function(event) {
//     gulp.run('scripts');
//   });

 //For later 
//   gulp.watch([
    
//   ], function(event) {
//     gulp.run('copy');
//   });
});