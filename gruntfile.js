module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
	    concat: {
			js: {
				src: [
					"src/leaf.prefix.js",
					"src/modules/functions.js",
					"src/modules/http.js",
					"src/modules/list.js",
					"src/modules/model.js",
					"src/modules/view.js",
					"src/modules/router.js",
					"src/controls/*.js",
					"src/leaf.suffix.js"
				],
				dest: "builds/leaf.full.js"
			}
		},
		replace: {
			dist: {
				src: ["builds/leaf.full.js"],
				dest: ["builds/leaf.full.js"],
				replacements: [
					{from: "$leaf-version", to: "<%= pkg.version%>"}
				]
			}
		},
		jshint: {
			files: ["builds/leaf.full.js"]
		},
		uglify: {
			js: {
				src: "builds/leaf.full.js",
				dest: "builds/leaf.min.js"
			}
		}
	});

 	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-text-replace");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["concat", "replace", "jshint", "uglify"]);
}
