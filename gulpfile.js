let 
gulp = require("gulp"),
sass = require("gulp-sass"),
sourcemaps = require("gulp-sourcemaps");
// browserSync = require("browser-sync").create();

const sassOptions = {
    "errLogToConsole": true,
    // "outputStyle": "compressed",
    "includePaths": ["./assets/scss"]
};

const browserSyncSettings = {
    "server": {
        "baseDir": "./"
    }
}

gulp.task("sass", function() {

    gulp.src("./assets/scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .on("error", sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./assets/css"))
        // .pipe(browserSync.stream({
        //     "stream": true
        // }))
});

// gulp.task("browserSync", function() {
//     browserSync.init();
// });

gulp.task("watch", [], function() {
    gulp.watch("./assets/scss/*.scss", ["sass"]);
    // gulp.watch("*.html").on("change", browserSync.reload);
});