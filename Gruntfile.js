module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            prod: {
                files: {
                    "./assets/dist/css/styles.css": "./src/less/styles.less"
                }
            }
        },
        concat: {
            options: {
                // separator: ';',
            },
            jsvascript: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './bower_components/headroom.js/dist/headroom.js',
                    './src/js/scripts.js'
                ],
                dest: './assets/dist/js/scripts.js',
            },
            css: {
                src: [
                    './bower_components/bootstrap/dist/css/bootstrap.css',
                    './bower_components/font-awesome/css/font-awesome.css',
                    './bower_components/animate.css/animate.css',
                    './assets/dist/css/styles.css'
                ],
                dest: './assets/dist/css/styles.css'
            }
        },
        uglify: {
            options: {
                mangle: false, // Use if you want the names of your functions and variables unchanged
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %>: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            frontend: {
                files: {
                    './assets/dist/js/scripts.min.js': './assets/dist/js/scripts.js',
                }
            }
        },
        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %>: Minified css file <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    './assets/dist/css/styles.min.css': ['./assets/dist/css/styles.css']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        cwd: './bower_components/bootstrap/fonts/',
                        src: '*',
                        dest: './assets/dist/fonts',
                        expand: true,
                        filter: 'isFile'
                    },
                    {
                        cwd: './bower_components/font-awesome/fonts/',
                        src: '*',
                        dest: './assets/dist/fonts',
                        expand: true,
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            keep_watching: {
                files: [
                    './src/less/*.less',
                    './src/js/*.js',
                ],
                tasks: ['less', 'concat', 'uglify', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['less', 'concat', 'uglify', 'cssmin', 'copy']);
};
