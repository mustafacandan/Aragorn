angular.module('Aragorn.app.services').factory('WeatherService', ['$q', '$http', 'CONFIG', function($q, $http, CONFIG) {
  var juhe_key = '&key=542c771d1fcc13abf2e915593f03b1ae';
  var API_base = 'http://op.juhe.cn/onebox/weather/query?';


  var getWeather = function(city) {
    var deferred = $q.defer();
    var city = encodeURIComponent(city);
    var url = CONFIG.proxy + encodeURIComponent(API_base + 'cityname=' + city + juhe_key);

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
    getWeather: getWeather
  }
}]);
