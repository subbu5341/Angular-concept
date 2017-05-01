module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			example: {
				port: 8000,
				base: 'src',
				livereload:true	
			}
		},
		concat: {
		  options: {
		    // define a string to put between each file in the concatenated output
		    separator: ';'
		  },
		  dist: {
		    // the files to concatenate
		    src: ['src/**/*.js'],
		    // the location of the resulting JS file
		    dest: 'public/<%= pkg.name %>.js'
		  }
		},
		jshint: {
		  // define the files to lint
		  files: ['Gruntfile.js', 'src/**/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		    // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true
		    }
		  }
		},
		clean: {
		  //js: ["src/**/*.js"]
		  js: ['!src/**/*.js', 'minJS/*.min.js']
		},
		watch: {
			js:{
			 	files: ['src/**/*.js','Gruntfile.js'],
			   	tasks: [],
			   	options: {
	                livereload: true
	            }
			},
			html: {
		        files: ['**/*.html'],
		       	options: {
	                livereload: true
	            }
		    },
		},
		copy: {
			options: {
		      separator: ': '
		      //punctuation: ' !!!',
		    },
		  files: {
		    cwd: 'src/js',  // set working folder / root to copy
		    src: '**/*',           // copy all files and subfolders
		    dest: 'target/files',    // destination folder
		    expand: true           // required when using cwd
		  }
		},
		uglify: {
		  options: {
		    // the banner is inserted at the top of the output
		    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		  },
		  dist: {
		    files: {
		      'minJS/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
		    }
		  }
		},
		 qunit: {
	      files: ['test/**/*.html']
	    },
	    express: {
		    all: {
		        options: {
		            bases: ['src/views'],
		            port: 8080,
		            hostname: "0.0.0.0",
		            livereload: true
		        }
		    }
		},

		// grunt-open will open your browser at the project's URL
		// https://www.npmjs.org/package/grunt-open
		open: {
		    all: {
		        path: 'http://google.com/',
		         app: 'Firefox'
		    }
		},
		js2coffee: {
		    options: {
		      // Task-level options go here
		    },
		    // Example: this target compiles a single file from JavaScript to CofeeScript
		    single: {
		      src: 'src/js/scopeCtrl.js',
		      dest: 'tmp/single/scopeCtrl.coffee'
		    },
		    // Example: this target compiles a directory of JavaScript files to
		    // individual CofeeScript files, retaining the same directory structure
		    // in the destination folder
		    
		  },
		coffee: {
		    coffee_to_js: {
		        options: {
		          bare: true,
		          sourceMap: true
		        },
		        expand: true,
		        flatten: true,
		        cwd: "src/coffee",
		        src: ["src/coffee/*.coffee"],
		        dest: 'client',
		        ext: ".js"
		    }
	    }
		/*serve: {
			options: {
				port: 9000,
				'client.js': {
					tasks: ['html2js', 'concat'],
					output: 'client.js'
				}
			}
		}*/
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-copy');
	grunt.loadNpmTasks('grunt-js2coffee');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-livereload');
	//grunt.loadNpmTasks('grunt-reload');
	//grunt.loadNpmTasks('grunt-serve');
	grunt.registerTask('test', ['jshint','qunit']);
	grunt.registerTask('default', ['concat','copy','connect','watch']);
	grunt.registerTask('server',[ 'express','copy','uglify','open','js2coffee','coffee','watch','clean','connect']);

};