const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

gulp.task("styles", () => {
  return (
    gulp
      .src("sass/**/*.scss")
      // https://www.npmjs.com/package/node-sass#outputstyle
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(gulp.dest("./css/"))
  );
});

gulp.task("clean", () => {
  return del(["css/**/*.css"]);
});

gulp.task("watch", () => {
  gulp.watch("sass/**/*.scss", (done) => {
    gulp.series(["clean", "styles"])(done);
  });
});

gulp.task("dev", gulp.series(["clean", "styles", "watch"]));

gulp.task("default", gulp.series(["clean", "styles"]));
