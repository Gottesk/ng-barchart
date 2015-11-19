module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "jade": {
            dev: {
                options: {
                    pretty: false
                },
                files: {
                    'temp/template.html': 'src/template.jade'
                }
            }
        },
        "stylus": {
            compile: {
                options: {},
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.styl'],
                        dest: 'dist',
                        ext: ['.css']
                    }
                ]
            }
        },
        "string-replace": {
            dist: {
                files: {
                    'dist/angular-barchart.js': 'src/angular-barchart.js'
                },
                options: {
                    replacements: [
                        {
                            pattern: "{html}",
                            replacement: function(match, p1, offset, string) {
                                return grunt.file.read('temp/template.html');
                            }
                        }
                    ]
                }
            }
        },
        'uglify': {
            my_target: {
                files: {
                    'dist/angular-barchart.min.js': ['dist/angular-barchart.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    return grunt.registerTask('default', ['jade', 'stylus', 'string-replace', 'uglify']);
};
