module.exports = function (grunt) {
    grunt.registerTask(
        'build', //
        [
            'eslint:all', //
            'clean:dist',
            'sass:dist',
            'cssmin',
            'autoprefixer:dist',
            'tinypng',
            'imagemin:webp',
            'copy:dist',
            'htmlmin',
        ],
    );
};
