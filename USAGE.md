# Getting started and working on globecontractors.com

## Overview:
* Static website hosted on a Red Hat Linux server
* Yarn for package management
* gulp for building, compiling code and chaining together tasks
* Shipit for deployment
* repository: https://github.com/themezzilla/globe-contractors

**(Note: command line commands are prefixed with a `$`, you don't need to include that when copy/pasting)**
### Install all of the things:
1. NodeJS: https://nodejs.org/en/download/
2. git: https://git-scm.com/download/mac git is the industry standard for *version control*. Developers use this to keep track of their changes to code over time. Each time you change some code and complete a task, you'll *commit* your changes to git (steps outlined later) and they will be eternally tracked by GitHub. This is most useful for working on a project with multiple people to see what they have changed/added, and also being able to roll your changes back if something breaks and you aren't sure why.
3. Sign up for an account on github.com, use personal email address.
4. Brew: (paste this in command line) `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`.
5. yarn: (also command line, you might need to restart your terminal after installing brew) `$ brew install yarn`.
6. create your public SSH key with email you used for GitHub `$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`.
7. Add your SSH key to your github account, instructions here: https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/#platform-mac.
8. `$ git config --global user.name "Jon Olson"`
9. `$ git config --global user.email "your_email@example.com"`
10. Atom (this is what you'll use to edit the code): https://atom.io/

### Set up your workspace:
1. Navigate (in terminal) to where you would like to keep the site, then `$ git clone git@github.com:themezzilla/globe-contractors.git`.
2. `$ yarn global add http-server` (local server for development on your computer)
3. `$ yarn global add gulp` (compile/build tool)
4. `$ yarn global add shipit-cli` (deployer)
5. `$ cd globe-contractors/`
6. `$ yarn`
7. `$ mkdir /tmp/globe-contractors` (this is for deployment use)

**(All steps after this are assumed that you are in the `globe-contractors` directory in your terminal)**
### Working on the site:
1.  `yarn dev` (this starts a local server in the directory and starts the `gulp watch` command to watch for CSS changes).
2. Navigate to `http://localhost:8080` in your browser (best to use chrome) to see your local version of the site.
3. Change any file, then refresh the page to see your changes.

### Steps every time you make changes:
1. **BEFORE CHANGES:** make sure you have the latest code (important) `$ git pull`.
2. **Make changes!** NOTE: Messed up a file beyond repair? Want to start over? You can roll back to the last version that git has by doing `$ git checkout filename_you_want_to_roll_back`, or to reset the whole repository `$ git reset --hard` (use with care, all of your changes will be undone).
3. See a summary of what has changed: `$ git status`.
4. Compile/build the site: `$ yarn build` (this step takes all the code and squishes it down, improving performance and packaging it up for production).
5. *Add* your changes to be committed: `$ git add -A` (alternatively, you can just add single files or folders with `$ git add path/to/file`) You can run another `$ git status` here to see the files are now ready to be committed.
6. *Commit* your changes: `$ git commit -m "[jo] message here about what your changes were"` the `[jo]` is to make it easy to see that it was you who committed, you'll notice mine are prefixed with `[cr]`.
7. *Push* changes to GitHub: `$ git push`.
8. OPTIONAL: Navigate to https://github.com/themezzilla/globe-contractors and see that your code is now on the internet!

### Deployment:
1. Make sure all changes are pushed to git (AKA all steps are done in the previous section).
2. Triple check everything works/looks the way it's supposed to. If it works/looks right locally, 99.999% chance it'll be the same on the server.
3. Ready to go? `$ yarn deploy`
4. Go to the site and make sure you see the changes.
5. Site broken? Don't know why? Run `$ yarn rollback` to go back to the previous (hopefully working) version on the server. Still broken? Call Coleman.

### Useful command line commands:
* `$ ls -la` - display contents of the folder (directory) you're in
* `$ cd directory_name` - change directory into the "directory_name" directory (TIP: use the Tab button to auto complete directory names)
* `$ cd ../` - go up one directory
* `$ pwd` - show current directory you are in
* `$ rm filename` - delete a file
* `$ rm -rf directory_name` - delete a whole directory
* `$ more filename` - show contents of a file, use space to scroll down
* `$ mkdir directory_name` - make a directory

### Useful resources:
* git cheatsheet: https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
* command line starter: http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything
