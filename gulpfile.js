var 
gulp = require("gulp"),
sass = require("gulp-sass"),
sourcemaps = require("gulp-sourcemaps"),
browserSync = require("browser-sync").create();

const sassOptions = {
    "errLogToConsole": true,
    "outputStyle": "compressed",
    "includePaths": ["./assets/scss"]
};

gulp.task("sass", function() {
    gulp.src("assets/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .on("error", sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream({
        "stream": true
    }));
});

gulp.task("html", function() {
    gulp.src("*.html")
    .pipe(browserSync.stream({
        "stream": true
    }))

    console.log("HTML reloaded");
});

gulp.task("browserSync", function() {
    browserSync.init({
        "localOnly": true,
        "files": [
            {
                "match": ["*.html"]
            }
        ]
    });
});

gulp.task("watch", ["browserSync"], function() {
    gulp.watch("assets/scss/*.scss", ["sass"]);
    gulp.watch("*.html", ["html"]);
    console.log("Watch done");
});