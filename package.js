Package.describe({
  name: 'clinical:study-picklist',
  version: '0.0.4',
  summary: 'User Picklist modal for  ClinicalFramework apps.',
  git: 'https://github.com/awatson1978/clinical-keybindings',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');
  api.use('clinical:modals@0.0.3');

  api.addFiles('client/studyPicklistModal/studyPicklistModal.html', 'client');
  api.addFiles('client/studyPicklistModal/studyPicklistModal.js', 'client');
  api.addFiles('client/studyPicklistModal/studyPicklistModal.less', 'client');

  api.export('userPicklistModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:study-picklist');
  api.addFiles('tests/study-picklist.js');
});