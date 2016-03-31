angular.module('Aragorn.app.services').factory('NewsService', ['$q', '$http', 'CONFIG', function($q, $http, CONFIG) {
  var juhe_key = 'key=23b67074c0bf1676e526f6ac79bc2e3b';
  var API_base = 'http://op.juhe.cn/onebox/news/words?';


  var getNews = function() {
    var deferred = $q.defer();
    var url = CONFIG.proxy + encodeURIComponent(API_base + juhe_key);

    $http({
      url: url,
      method: 'GET'
    })
      .then(function(response) {
        deferred.resolve(response);
      });

    return deferred.promise;
  }

  return {
    getNews: getNews
  }
}]);
