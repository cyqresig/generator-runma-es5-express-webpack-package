/**
 * @fileOverview  应用配置
 * @author leon.chen
 * @version
 * Created on 2016/2/24.
 */

module.exports = {
  //env: 'production',      //设置node.js的运行环境为 生产环境还是调试环境（生产环境时设置）
  //env: 'development',       //设置node.js的运行环境为 生产环境还是调试环境（开发环境时设置）
  serverPort: '3000',         //设置nodeServer端口
  etag: false,              //关闭etag设置，默认会开启
  xPoweredBy: false,        //移除请求与响应头中的express服务器描述信息，默认会加上
  views: 'views/dev',       //项目view所在的目录（从项目根目录起）
  viewSuffix: 'html',       //注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以是.html了
  resources: './public/dev',   //项目resources所在的目录（从项目根目录起，只有开发环境才需要在本地放静态资源，测试环境，演示及生产环境都是放在静态资源服务器）
  pageEntry: '/pages/js/',     //项目页面入口js目录
  globalEntry: '/global/js/', //项目全局js目录
  moduleEntry: '/modules/js/', //项目模块js目录,
  localeEntry: '/locales/',  //项目客户端语言包js目录
  //logLevel: 'info',       //设置日志级别为监测级别（生产环境时设置）
  logLevel: 'debug',        //设置日志级别为调试级别（开发环境时设置）
  reqNodeLog: false,         //客户端发请求至nodejs服务器，是否日志输出request对象信息
  reqApiLog: true, //false,          //nodejs服务器请求api服务器，是否日志输出request对象信息
  resApiLog: true, //false,          //api服务器响应，是否日志输出request对象信息
  resourceServer: '', //'http://node.doorto.com:3000',  //静态资源服务器访问域名js，css，json，前端模板文件等，img可能另外放服务器所以分开写
  imgServer: '', //'http://node.doorto.com:3000',       //图片服务器访问域名,
  cookieOptions: {           //服务器cookie的设置
    path: '/',        //cookie在根路径下
    expires: new Date(Date.now() + 2592000000), //默认失效时间一个月
    maxAge: 2592000000  //默认失效时间一个月
  },

  css: {
    global: {
      files: ['./public/dev/global/css/**/*.css'],
      src: './public/dev/global/css/',
    },
    layouts: {
      files: ['./public/dev/layouts/css/**/*.css'],
      src: './public/dev/layouts/css/',
    },
    pages: {
      files: ['./public/dev/pages/css/**/*.css'],
      src: './public/dev/pages/css/',
    }
  },
  less: {
    allFiles: ['./public/dev/**/less/**/*.less'],
    global: {
      files: ['./public/dev/global/less/**/*.less']
    },
    layouts: {
      files: ['./public/dev/layouts/less/**/*.less']
    },
    pages: {
      files: ['./public/dev/pages/less/**/*.less']
    }
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 7',
      'android 4'
    ],
    cascade: true, //是否美化属性值 默认：true 像这样：
    //-webkit-transform: rotate(45deg);
    //        transform: rotate(45deg);
    remove:true //是否去掉不必要的前缀 默认：true
  },

};



