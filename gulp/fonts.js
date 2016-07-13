'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import pngquant from 'imagemin-pngquant';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

  // Imagemin
  gulp.task('fonts', () => {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*.{eot,svg,ttf,woff}'))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
}
