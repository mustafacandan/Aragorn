angular.module('Aragorn.config', [])
.constant('CONFIG', {
  'app_version': '0.1',

  'API_ADDRESS': 'http://localhost:1337',
  // 'API_ADDRESS': 'http://188.166.231.171:1337',


  'proxy': 'http://45.63.126.140:8000/?raw=true&url='
});
