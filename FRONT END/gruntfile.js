module.exports = function(grunt) {
    // Configuração do Projeto
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Compilação de arquivos LESS
      less: {
        development: {
          files: {
            "css/style.css": "less/style.less" // Destino: Origem
          }
        }
      },
  
      // Compressão de arquivos JavaScript
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'js/app.min.js': ['js/app.js'] // Destino: Origem
          }
        }
      }
    });
  
    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  