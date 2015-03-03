var packageConfig = require('../package.json');

var dest = "./build/content/themes/" + packageConfig.name;
var src = './src';
var bowerSrc = './bower_components';

module.exports = {
  browserSync: {
    proxy: 'wordpress-starter.dev'
  },
  sass: {
    src: src + "/assets/styles/main.sass",
    dest: dest + "/assets/styles",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'assets/images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/assets/images/**",
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
