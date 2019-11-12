module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'H:\workspace\Framework\src\test\java\com\learnFramework\TestCases\spec.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }

    },
    protractor: {
        options: {
          keepAlive: true,
          configFile: "H:\\workspace\\Framework\\Configuration\\testConfig.js"
        },
        singlerun: {},
        auto: {
          keepAlive: true,
          options: {
            args: {
              seleniumPort: 4444
            }
          }
        }
      }

    });
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');
  grunt.registerTask('default', ['jshint', 'protractor:singlerun']);
  };



