'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {
      // Styles
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], ['sass']);

      // Font
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/fonts/*.{eot,svg,ttf,woff}'),
        path.join(dirs.source, dirs.modules, '**/fonts/*.{eot,svg,ttf,woff}')
      ], ['fonts']);

      // Jade Templates
      gulp.watch([
        path.join(dirs.source, '**/*.jade'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], ['jade']);

      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.jade')
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*'),
        '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
      ]).on('change', browserSync.reload);
    }
  });
}
