Package.describe({
  summary: "A OAuth2 wrapper for the LinkedIN API",
  version: "1.0.2",
  git: "https://github.com/PauliBuccini/meteor-linkedin.git"
});

Package.onUse(function(api) {

  api.use('oauth@1.0.1', ['client', 'server']);
  api.use('oauth2@1.0.0', ['client', 'server']);
  api.use('http@1.0.4', ['client', 'server']);
  api.use('templating@1.0.5', 'client');
  api.use('service-configuration@1.0.1', ['client', 'server']);

  api.export('LinkedIn');

  api.addFiles(
    ['linkedin_configure.html', 'linkedin_configure.js'],
    'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});

