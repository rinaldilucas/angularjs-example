module.exports = function (grunt) {
    grunt.config.set('concurrent', {
        dev: {
            tasks: ['watch:sass', 'watch:html', 'watch:eslint', 'watch:static', 'run:image', 'copy:dev'],
            options: {
                logConcurrentOutput: true,
            },
        },
    });
};
