const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
const notify = require("gulp-notify");
const pug = require("gulp-pug");

gulp.task("watch", function() {
  gulp.watch("./sass/**", gulp.task('sass'));
  gulp.watch("./pug/**", gulp.task('pug'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./js/**/*.js", gulp.task('reload'));
  gulp.watch("./*.html", gulp.task('reload'));
});

gulp.task("sass", function() {
  return gulp.src("./sass/style.scss")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass({
      includePaths: require('node-reset-scss').includePath
    }))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
});

gulp.task("pug", function() {
  var option = {
    pretty: true
  };
  return (
    gulp.src("./pug/*.pug")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug(option))
    .pipe(gulp.dest("./"))
  );
});

gulp.task('reload', function(done) {
  browserSync.reload();
  done();
});

gulp.task('default',
  gulp.series(
    gulp.parallel("sass", "pug"),
    gulp.parallel("browser-sync", "watch")
  )
);
