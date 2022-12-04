import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import { deleteAsync } from 'del';
import eslint from 'gulp-eslint';
import rename from 'gulp-rename';
import glob from 'glob';

const prodmode = () => {
    process.env.NODE_ENV = 'production';
    return;
}

const browserifytask = () => {
    prodmode();
    var files = glob.sync("build/**/*.js");
    return browserify({ entries: files })
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/'));
};

const lastMinify = () => {
    return gulp.src('./dist/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist'));
}

const buildtask = () => {
    return gulp.src([
            'src/**/*.ts', 'src/*.ts'
        ])
        .pipe(babel())
        .pipe(gulp.dest('build'));
};

const cleantask = () => {
    return deleteAsync([
        'build/**/*', 'build/*', 'build', 'dist/*', 'dist'
    ]);
}

const eslintTask = () => {
    return gulp.src('./src/**/*.ts')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

export default gulp.series(
    cleantask,
    gulp.parallel(
        eslintTask, 
        gulp.series(
            buildtask, 
            browserifytask,
            lastMinify
        )
    )
);