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
					"public/css/<%= pkg.name%>.css": "public/css/less/*.less"
				}
			}
		},

		watch: {
			options: {
				livereload: true
			}, 
			stylesheets: {
				files: 'public/css/**/*.less',
				tasks: ['clean:stylesheets', 'less:build']

			},

			scripts: {
				files: ['Gruntfile.js', 'public/js/**/*.js'],
				tasks: ['jshint:build']
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
	
	};