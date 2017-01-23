module.exports = function (shipit) {
	require('shipit-deploy')(shipit);

	shipit.initConfig({
		default: {
			workspace: '/tmp/globe-contractors',
			deployTo: '/home/globeco/releases',
			dirToCopy: './build',
			repositoryUrl: 'https://github.com/themezzilla/globe-contractors.git',
			ignores: ['.git', 'node_modules'],
			keepReleases: 2,
			deleteOnRollback: false,
			key: '~/.ssh/id_rsa.pub',
			shallowClone: true

		},
		production: {
			servers: 'globeco@globecontractors.com'
		}

	});

};
