module.exports = function(grunt) {
  var resources = grunt.file.readJSON('map.resources.json');
  var getJsFiles = function(key){
      var strJS = '';
      if(key === 'debug'){
      for(var i= 0, l= iterator.length; i < l; i++){
      return strJS;
  };
    // Project configuration.
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['jshint','uglify', 'replace']);
};