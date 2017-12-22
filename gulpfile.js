var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");
var pug = require("gulp-pug");

gulp.task('default', ['sass', 'browser-sync', 'pug', 'watch']);

gulp.task('watch', () => {
  gulp.watch(['./sass/**'], () => {
    gulp.start(['sass']);
  });
  gulp.watch(['./pug/**'], () => {
    gulp.start(['pug']);
  });
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./js/**/*.js", ['reload']);
  gulp.watch("./*.html", ['reload']);
});

gulp.task("sass", () => {
  gulp.src("./sass/**/*.scss")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
});

gulp.task("pug", () => {
  var option = {
    pretty: true
  }
  gulp.src("./pug/**/*.pug")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug(option))
    .pipe(gulp.dest("./"))
});

gulp.task('reload', () => {
  browserSync.reload();
});
