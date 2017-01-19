var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    bourbon = require('node-bourbon'),
    ftp = require('vinyl-ftp'),
    notify = require("gulp-notify");

// Скрипты проекта

gulp.task('common', function () {
    return gulp.src('app/libs/common.js')
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', ['common'], function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.js',
        'app/libs/modernizr/modernizr.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/YTPlayer/dist/jquery.mb.YTPlayer.min.js',
        'app/libs/mobile-detect/mobile-detect.min.js',
        'app/libs/wow/dist/wow.min.js',
        'app/libs/owl.carousel/dist/owl.carousel.min.js',
        'app/libs/jquery.stellar/src/jquery.stellar.js',
        'app/libs/jquery/dist/jquery-migrate-3.0.0.min.js'
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
    browserSync({
        proxy: "comfort",
        notify: false
    });
});

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: bourbon.includePaths
        }).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'scripts', 'browser-sync'], function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch(['libs/**/*.js', 'app/js/common.min.js'], ['scripts']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'scripts'], function () {

    var buildFiles = gulp.src([
        'app/*.html',
        'app/.htaccess',
        'app/mail.php'
    ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        'app/css/main.min.css'
    ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        'app/js/scripts.min.js',
        'app/js/common.min.js'
    ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        'app/fonts/**/*'
    ]).pipe(gulp.dest('dist/fonts'));

    var buildIE = gulp.src([
        'app/libs/html5shiv/*',
        'app/libs/respond/*'
    ]).pipe(gulp.dest('dist/libs/**/*'));
});

gulp.task('deploy', function () {

    var conn = ftp.create({
        host: '194.58.102.22',
        user: 'igor_verst',
        password: '3ekSVQPA',
        parallel: 10,
        log: gutil.log
    });

    var globs = [
        'dist/**',
        'dist/.htaccess'
    ];
    return gulp.src(globs, {buffer: false})
        .pipe(conn.dest('/comfort'));

});

gulp.task('removedist', function () {
    return del.sync('dist');
});
gulp.task('clearcache', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);
