angular.module('Aragorn.app.services').factory('StockService', ['$q', '$http', 'CONFIG', function($q, $http, CONFIG) {
  var juhe_key = '&key=92d25600a7e0014acf5db70b33c2696c';
  var API_base = 'http://web.juhe.cn:8080/finance/stock/hs?';


  var getStock = function(gid) {
    var deferred = $q.defer();
    var url = CONFIG.proxy + encodeURIComponent(API_base + 'gid=' + gid + juhe_key);

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
    getStock: getStock
  }
}]);
