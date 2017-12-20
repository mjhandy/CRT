module.exports = function(grunt) {

    // load grunts tasks automatically
    require('load-grunt-tasks')(grunt);

    // initial config
    grunt.initConfig({

      pkg: this.file.readJSON('package.json'),

      info:{
        sourceDir: '/ui/',
        componentsDir: '<%= info.sourceDir %>components',
        configDir:'<%= info.sourceDir %>configFiles',
        sassDir:'<%= info.sourceDir %>sass',
        scriptDir:'<%= info.sourceDir %>scripts'
      },

      //clean
      clean:{
        options: {
          force: true
        },
        css: [
          '<%= info.sourceDir %>*.css'
        ],
        js:[
          '<%= info.sourceDir %>*.js'
        ]
      },
      //sass compile
      sass:{
        dev:{
          files: {
            '<%= info.sourceDir %>main.css' : '<%= info.sassDir %>main.scss'
          }
        },
        options:{
          includePaths: [
            'bower_components/bootstrap-sass/assets/stylesheets',
            'bower_components/bourbon/app/assets/stylesheets',
            'bower_components/slick-carousel/slick',
          ]        
        }        
      }
    });


    //Grunt tasts
    grunt.registerTask('sass',[
      'newer:csscomb',
      'sass:dev'
    ]);
    
    grunt.registerTask('js',[
      'jsbeautifier:all',
      'jshint:all',
      'uglify:dev'
    ]);    

    grunt.registerTask('src',[
      'sass',
      'js'
    ]);

    grunt.registerTask('dev',[
      'clean',
      'src',
      'watch'
    ]);
};