'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var settingsJSON = require('./config/envSettings.json')

let configCopy = build.subTask('configCopy', (gulp, buildOptions, done) => {

    if (settingsJSON.environment == "Ring1"){
        gulp.src('./environment_specific/Ring1/serve.json')
        .pipe(gulp.dest('./config/'));
      }
              
      else {
        
        gulp.src('./environment_specific/All/serve.json')
        .pipe(gulp.dest('./config/'));

            }
      
            // Don't forget to tell SPFx you are done
      done();
  
  })
  
  // register task to prebuild process
  build.rig.addPreBuildTask(configCopy);


build.initialize(require('gulp'));
