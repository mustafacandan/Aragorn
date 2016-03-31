AragornAppControllers.controller('displayCtrl', function($scope, ControlService, WeatherService, NewsService, StockService) {
    $scope.widgets = {};

    $scope.avaliableWidgets = ControlService.getAvaiableWidgets();
    var socket = ControlService.socket;

    $scope.addWidget = function(name) {
      $scope.widgets[name] = $scope.avaliableWidgets[name];
    }

    $scope.removeWidget = function(name) {
      delete $scope.widgets[name];
    }

    socket.on('displayConnected', function (data) {
      console.log('displayConnected');
    });

    socket.on('changeDisplayWidget', function (data) {
      window.data = data;
      $scope.widgets = data;
      console.log(data);
      $scope.$apply();
    });

    $scope.$watch('widgets', function(widgets) {
      for(var key in widgets) {
        var widget = widgets[key];

        if(widget.style) {
          widget.style.left = widget.style.left * 3.4;
        }
      }


      if(widgets.weather) {
        WeatherService.getWeather(widgets.weather.config.city)
          .then(function(response) {
            $scope.weather = response.data.result.data.weather;
          });
      }

      if(widgets.news) {
        NewsService.getNews()
          .then(function(response) {
            $scope.news = response.data.result.slice(0, 5);
          });
      }

      if(widgets.stock) {
        StockService.getStock('sh601009')
          .then(function(response) {
            $scope.stock = response.data.result[0];
          });
      }

    });

  });
