module.exports = function(grunt){
    //gruntの設定
    grunt.initConfig({
//        sass: {
//            dist: {
//                options: {
//                    style: 'expanded'
//                },
//                files: {
//                    'css/s9727.css': 'src/scss/s9727.scss'
//                }
//            }
//        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'css',
                    sourcemap: true
                }
            }
        },
//        autoprefixer: {
//            target: {
//                expand: true,
//                src: 'css/**/*.css',
//                dest: 'dist'
//            },
//            options: {
//                // 対象とするブラウザをこのように指定することができます。
//                browsers: ['last 2 version', 'ie 8', 'ie 9']
//            }
//        },
//        cssmin: {
//            target: {
//                expand: true,
//                // dist/css以下のcss。ただしmin.cssで終わっていないものに限る
//                src: ['css/**/*.css', '!*.min.css'],
//                // 出力先はそのまま
//                dest: './',
//                // ファイルの拡張子をファイル名.min.cssにする
//                ext: '.min.css'
//            }
//        },
        typescript: {
            base: {
                src: ['src/typescript/**/*.ts'],
                dest: 'script/',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: true,
                    declaration: true
                }
            }
        },
//        uglify: {
//            options: {
//                mangle: {
//                    except: ['jQuery', 'skrollr']
//                }
//            },
//            my_target: {
//                files: {
//                    'dest/output.min.js': ['script/s9727.js']
//                }
//            }
//        },
//        concat: {
//            files: {
//                // 元ファイルの指定。
//                src : 'script/*.js',
//                // 出力ファイルの名前・パス指定
//                dest: 'script/concat/hogehoge.js'
//            }
//        },
        imagemin: {
            target: {
                files: [{
                    expand: true,
                    src: ['images/**/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        },
        watch: {
            compass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['compass']
            },
//            scss: {
//                files: ['src/scss/**/*.scss'],
//                tasks: ['sass']
//            },
//            css: {
//                files: ['css/**/*.css'],
//                tasks: ['autoprefixer','cssmin']
//            },
//            typescript :{
//                files: ['src/typescript/**/*.ts'],
//                tasks: ['typescript']
//
//            },
//            script: {
//                files: ['script/**/*.js'],
//                tasks: ['uglify']
//            },
            images: {
                files: ['images/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        }
    });

    //pluginをロード
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);
};
