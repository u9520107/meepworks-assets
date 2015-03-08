import gulp from 'gulp';
import co from 'co';
import * as gb from 'greasebox';
import path from 'path';

gulp.task('build', (cb) => {
  co(function * () {
    yield gb.rm(path.resolve(__dirname, '../dist'));
    gulp.src('source/*.js')
      .pipe(gb.loadMap())
      .pipe(gb.babelTransform())
      .pipe(gb.writeMap())
      .pipe(gulp.dest('dist'))
      .on('end', cb);
  });
});
