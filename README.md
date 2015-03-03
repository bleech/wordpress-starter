# bleech Wordpress-Starter

## Instructions

- `npm install -g gulp bower`
- `git clone git@github.com:bleech/wordpress-starter.git {project}`
- `cd {project}`
- `rm -rf .git`
- `git init`
- `git submodule add git@github.com:WordPress/WordPress.git build/wordpress`
- `git add .`
- `git commit -am 'initial commit'`
- create virtual host in mamp `{project}.bleech.de` to `./build` folder
- open `./gulp/config.js` and change `wpHost` to `{project}.bleech.de`
- open package.json + bower.json & rename 'name' to {project} and set version, etc.
- open .gitignore & change `build/content/themes/wordpress-starter/` to `build/content/themes/{project}/`
- copy `./build/wp-config-sample.php` to `wp-config.php` and adjust settings
- `export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig`
- `brew install cairo`
- `npm install`
- `gulp`
- navigate to `localhost:3000` and finish setup
- activate theme in wordpress backend
- `git add .`
- `git commit -am 'customized base'`
- happy hacking!

# Child Instructions

# bleech Wordpress-Starter

## Instructions

- `npm install -g gulp bower`
- clone project into {project}
- `cd {project}`
- `git submodule update --init`
- create virtual host in mamp `{project}.bleech.de` to `./build` folder
- `export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig`
- `brew install cairo`
- `npm install`
- `gulp`
- happy hacking!
