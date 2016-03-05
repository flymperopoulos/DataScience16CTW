module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			react: {
				files: ['react_components/*/*.jsx'],
				tasks: ['browserify']
			}
		},

		browserify: {
			options: {
				transform: [ require('grunt-react').browserify  ]

			},
			app: {
				src: ['react_components/app.jsx'],
				dest: 'public/javascripts/app.js'
			},
			map: {
				src: ['react_components/Map.jsx'],
				dest: 'public/javascripts/Map.js'
			},
			d3Map: {
				src: ['react_components/d3Map.jsx'],
				dest: 'public/javascripts/d3Map.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
	'browserify'
	]);
};