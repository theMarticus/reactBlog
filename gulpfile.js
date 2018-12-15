const { src, dest, watch } = require('gulp');

const sass = require('gulp-sass')

function scss(cb) {
    // place code for your default task here
    return src('SCSS/martiBlog.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(dest('./src'));
    cb();
  }


function defaultTask(cb) {
    // place code for your default task here
        scss(cb);
        watch('SCSS/**/*.scss', scss);
        cb();
  }
  
  exports.default = defaultTask
