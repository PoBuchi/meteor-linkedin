Package.describe({
  summary: "A OAuth2 wrapper for the LinkedIN API",
  version: "1.1.1",
  git: "https://github.com/PauliBuccini/meteor-linkedin.git"
});

Package.onUse(function(api) {

  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating@1.0.5', 'client');
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('LinkedIn');

  api.addFiles(
    ['linkedin_configure.html', 'linkedin_configure.js'],
    'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});

