module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: { separator: ';' },
      dist: {
        src: [ 'src/bower/jquery/jquery.js',
               'src/bower/jquery-ui/ui/jquery-ui.js',
               'src/bower/fullcalendar/calendar.js',
               'src/bower/momentsjs/momemnt.js',
               'src/bower/angular/angular.js',
               'src/bower/angular-ui-calendar/src/calendar.js',
               'src/js/app.js', 
               'src/js/controllers.js',
               'src/js.filters.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
          files: [ { expand: true, cwd: 'src/css/', src: ['**'], dest: 'dist/css/' },
                   { expand: true, cwd: 'src/bower_components/fullcalendar', src: ['*.css'], dest: 'dist/css/' }]
      }
    },
    targethtml: {
      dist: {
        files: { 'dist/index.html': 'src/index.html' }
      }
    },
    karma: {
      unit: {
        configFile: 'conf/karma.conf.js',
        singleRun: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('dist', ['concat', 'targethtml', 'copy']);
};