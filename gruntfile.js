module.exports = function(grunt) {
	grunt.initConfig({
	    concat: {
			js: {
				src: [
					'src/leaf.prefix.js',
					'src/modules/functions.js',
					'src/modules/http.js',
					'src/modules/request.js',										
					'src/modules/list.js',					
					'src/modules/model.js',
					'src/modules/view.js',	
					'src/modules/router.js',									
					'src/directives/*.js',		
					'src/leaf.suffix.js'
				],
				dest: 'builds/leaf.full.js'
			}
		},
		jshint: {
			files: ['builds/leaf.full.js']
		},
		uglify: {
			js: {
				src: 'builds/leaf.full.js',
				dest: 'builds/leaf.min.js'
			}
		},
 		jsdoc2md: {
			oneOutputFile: {
				src: 'builds/leaf.full.js',
				dest: 'docs/api.md'
			},
			withOptions: {
				options: {
					'no-gfm': true,
					'separators': true
				}
			}
    	}   		
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint'); 
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');	

	grunt.registerTask('default', ['concat', 'jshint', 'uglify']);
	grunt.registerTask('api', ['concat', 'jsdoc2md']);
}