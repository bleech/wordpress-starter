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
- open package.json + bower.json & rename 'name' to {project} and set version, etc.
- open .gitignore & change `build/content/themes/wordpress-starter/` to `build/content/themes/{project}/`
- copy `./build/wp-config-sample.php` to `wp-config.php` and adjust settings
- `npm install`
- `gulp`
- navigate to `localhost:3000` and finish setup
- activate theme in wordpress backend
- `git add .`
- `git commit -am 'customized base'`
- happy hacking!
