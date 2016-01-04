var path = require("path");
var gulp = require("gulp");

var babel = require("gulp-babel");

var newer = require("gulp-newer");


var sourcemaps = require("gulp-sourcemaps");
var src="src/**/*.js";
var dest=__dirname;



function error(error){
  console.log(`
${error.name}: ${error.message}
location: ${error.loc.line}:${error.loc.column}

${error.stack}

${error.codeFrame}
`)
}

gulp.task("build",function(){
    gulp.src(src).
    pipe(newer(dest)).
    pipe(sourcemaps.init()).
    pipe(babel({
      presets:["es2015","stage-0"],
      plugins:["transform-runtime"]
    })).on("error",error).
    pipe(sourcemaps.write()).
    pipe(gulp.dest(dest));
})

gulp.task("watch",["build"],function(){
    gulp.watch(src,["build"]);
})

//npm install -D gulp gulp-babel gulp-newer gulp-sourcemaps
