module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	clean: [
	    "./lib",
	    "./bower_components/font-awesome",
	    "./bower_components/lato-googlefont",
	    "./bower_components/robotoslab-googlefont",
	    "./bower_components/inconsolata-googlefont"
	],

	bower: {
	    install: {
		//just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
	    }
	}
	
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');
    
    // Default task(s).
    grunt.registerTask('default', ['clean']);
    grunt.registerTask('download',['bower', 'clean'])
};
