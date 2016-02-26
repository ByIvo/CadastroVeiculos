module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'public/js/**/*.js']
		},

		clean: {
			dist: {
				src: 'dist'
			},

			stylesheets: {
				src: 'public/css/*.css'
			}
		},

		copy: {
			dist:  {
				cwd: 'public',
				src: '**/*',
				dest: 'dist',
				expand: true
			}
		},


		less: {
			build: {
				files: {
					"css/<%= pkg.name%>.css": "css/less/*.less"
				}
			}
		},

		watch: {
			build: {
				files: ['src/**/*.html', 'src/img/*'],
				tasks: ['build']
			},

			stylesheets: {
				files: 'src/css/**/*.less',
				tasks: ['clean:stylesheets', 'less:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['less:build']);
	grunt.registerTask('dist', ['clean:dist', 'less:build','copy:dist']);
}