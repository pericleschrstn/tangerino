// Adiciona os modulos instalados
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaCss() {
  return gulp
    .src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('deploy/css'))
    .pipe(browserSync.stream());
}
// Tarefa da função que compila o CSS
gulp.task('css', compilaCss);

// Função para otimizar imagens
function minifyImg() {
  return gulp.src('img/*').pipe(imagemin()).pipe(gulp.dest('deploy/img/'));
}
gulp.task('img', minifyImg);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    proxy: 'http://127.0.0.1:5500',
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

// Função de watch do Gulp
function watch() {
  gulp.watch('css/*.css', compilaCss);
  // gulp.watch('js/*.js', compilaJs);
  gulp.watch(['*.html', './**/*.html']).on('change', browserSync.reload);
  //gulp.watch(['src/*.html']).on('change', browserSync.reload);
  gulp.watch('img/*', minifyImg);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'css', 'browser-sync', 'img'));
