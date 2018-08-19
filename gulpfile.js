const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const rollup = require(`gulp-better-rollup`);
const sourcemaps = require(`gulp-sourcemaps`);

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

  gulp.task(`scripts`, () => {
    return gulp.src(`js/main.js`)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(rollup({}, `iife`))
      .pipe(sourcemaps.write(``))
      .pipe(gulp.dest(`build/js`));
  });

  gulp.task("copy", function () {
    return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/**/*.html"
    ], {
      base: "source"
    })
      .pipe(gulp.dest("build"));
  });

  gulp.task("clean", function () {
    return del("build");
  });

  gulp.task("build", function (done) {
    run(
      "clean",
      "copy",
      "scripts",
      "style",
      done
    );
  });

