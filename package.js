Package.describe({
  name: "pauli:linkedin",
  summary: "A OAuth2 wrapper for the LinkedIN API",
  version: "1.1.2",
  git: "https://github.com/PauliBuccini/meteor-linkedin.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4')

  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('LinkedIn');

  api.addFiles(
    ['linkedin_configure.html', 'linkedin_configure.js'],
    'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});

