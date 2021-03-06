Package.describe({
  summary: 'CQRS and Event Sourcing Infrastructure for Meteor.',
  name: 'space:cqrs',
  version: '4.0.2',
  git: 'https://github.com/CodeAdventure/space-cqrs.git',
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'coffeescript',
    'space:base@1.3.1',
    'space:messaging@0.3.0'
  ]);

  api.addFiles(['source/server.coffee'], 'server');

  // ========= SHARED =========

  api.addFiles(['source/client.coffee']);
  api.addFiles(['source/domain/value_object.coffee']);

  // ========= server =========

  api.addFiles([
    'source/configuration.coffee',
    // INFRASTRUCTURE
    'source/infrastructure/repository.coffee',
    'source/infrastructure/commit_store.coffee',
    'source/infrastructure/commit_publisher.coffee',
    // DOMAIN
    'source/domain/aggregate.coffee',
    'source/domain/process_manager.coffee',

  ], 'server');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'check',
    'space:cqrs',
    'practicalmeteor:munit@2.0.2',
    'space:testing@1.3.0'
  ]);

  api.addFiles([
    // DOMAIN
    'tests/domain/aggregate.unit.coffee',
    'tests/domain/process_manager.unit.coffee',
    'tests/domain/value_object.unit.coffee',
    // INFRASTRUCTURE
    'tests/infrastructure/commit_store.unit.coffee',
    'tests/infrastructure/commit_publisher.unit.coffee',
    'tests/infrastructure/repository.unit.coffee',
    // MODULE
    'tests/server_module.integration.coffee',
  ], 'server');

});
