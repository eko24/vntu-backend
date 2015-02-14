module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js',
                'server.js',
                'test/**/*.js',
                'routes/**/*.js',
                'configuration/**/*.js'
            ],
            options: {
            	expr: true,
                globals: {
                    "globals": {
                        "describe": false,
                        "it": false,
                        "before": false,
                        "beforeEach": false,
                        "after": false,
                        "to": false,
                        "be": false,
                        "null": false,
                        "afterEach": false
                    }
                }
            }
        }
    });


    grunt.registerTask('default', ['jshint']);

};
