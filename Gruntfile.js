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
      }
      //sass compile
    });

};