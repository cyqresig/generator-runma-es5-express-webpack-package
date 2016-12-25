var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var generator = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
var runmaPackage = generator.Base.extend({
    info: function() {
        this.log(chalk.green(
            '开始创建润码内部nodeJS项目包, 该包基于es5, express, webpack, 请稍候...'
        ));
    },
    generateBasic: function() {  //自定义拷贝templates目录下的目录及文件
        this.directory('config', 'config');    //拷贝目录
        this.copy('package.json', 'package.json');   //拷贝文件
    },
    generateClient: function() {    //自定义需要生成的根路径
        this.sourceRoot(path.join(__dirname, 'templates')); //指定为templates目录下
        this.destinationPath('./');
    },
    install: function() {      //安装依赖
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        this.log(yosay(
            '项目包已成功安装完毕, 赶快去开发吧~'
        ));
    }
});
module.exports = runmaPackage;