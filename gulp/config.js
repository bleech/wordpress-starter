var packageConfig = require('../package.json');

var dest = "./build/content/themes/" + packageConfig.name;
var src = './src';
var bowerSrc = './bower_components';
var wpHost = 'wordpress-starter.dev';

module.exports = {
  browserSync: {
    proxy: wpHost,
    open: false
  },
  stylus: {
    src: src + "/assets/styles/main.styl",
    dest: dest + "/assets/styles",
    settings: {
      'include css': true
    }
  },
  sprites: {
    spriteJPG: {
      src: [src + '/assets/sprites/**/*.{jpg,jpeg}', '!' + src + '/assets/sprites/*.jpg'],
      settings: {
        imgName: 'sprite@2x.jpg',
        imgPath: '../images/sprite.jpg',
        cssName: '_spriteJPG.styl',
        cssTemplate: './gulp/tasks/sprites/stylus.template.mustache',
        engine: 'canvassmith',
        cssVarMap: function (sprite) {
          sprite.name = 'jpg-' + sprite.name;
          sprite.retina_image = '../images/sprite@2x.jpg';
        },
        cssOpts: {functions: false}
      },
      dest: src + '/assets/sprites'
    },
    spritePNG: {
      src: [src + '/assets/sprites/**/*.png', '!' + src + '/assets/sprites/*.png'],
      settings: {
        imgName: 'sprite@2x.png',
        imgPath: '../images/sprite.png',
        cssName: '_spritePNG.styl',
        cssTemplate: './gulp/tasks/sprites/stylus.template.mustache',
        engine: 'canvassmith',
        cssVarMap: function (sprite) {
          sprite.name = 'png-' + sprite.name;
          sprite.retina_image = '../images/sprite@2x.png';
        },
        cssOpts: {functions: false}
      },
      dest: src + '/assets/sprites'
    }
  },
  images: {
    src: [src + "/assets/images/**", src + "/assets/sprites/*.{jpg,png}"],
    dest: dest + "/assets/images"
  },
  jadePHP: {
    src: src + "/**/*.php.jade",
    dest: dest
  },
  iconFonts: {
    name: 'Gulp Starter Icons',
    src: src + '/assets/icons/*.svg',
    dest: dest + '/assets/fonts',
    sassDest: src + '/assets/styles',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/assets/scripts/main.coffee',
      dest: dest + '/assets/scripts',
      outputName: 'main.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      // require: ['jquery', 'backbone/node_modules/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }]
  },
  coffeelint: {
    src: src + '/assets/scripts/**/*.coffee'
  },
  concat: {
    head: {
      src: [
        bowerSrc + '/modernizr/modernizr.js'
      ],
      name: 'head.js',
      dest: dest + '/assets/scripts/'
    },
    vendor: {
      src: [
        bowerSrc + '/respond/dest/respond.min.js'
      ],
      name: 'vendor.js',
      dest: dest + '/assets/scripts/'
    }
  },
  copy: {
    src: [
      src + '/assets/styles/editor-style.css',
      src + '/*.*',
      src + '/templates/**/*.*',
      src + '/lib/**/*.*',
      src + '/lang/**/*.*',
      '!' + src + "/**/*.php.jade"
    ],
    base: src,
    dest: dest
  },
  clean: {
    src: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
