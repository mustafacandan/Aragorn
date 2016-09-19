AragornAppControllers
  .controller('IndexCtrl', function($rootScope, WidgetService, localStorageService, CONFIG) {

    //get widgets
    var data = {
      user: localStorageService.get('authData').userName
    }
    io.socket.get(CONFIG.API_ADDRESS + '/widgets', data, function(res) {
      if(res) {
        $rootScope.widgets = res;
      }else {
        $rootScope.widgets = {};
      }
    });

    $rootScope.avaliableWidgets = WidgetService.getAvaiableWidgets();

    $rootScope.addWidget = function(name) {
      $rootScope.widgets[name] = $rootScope.avaliableWidgets[name];
      WidgetService.setWidgets($rootScope.widgets);
    };

    $rootScope.removeWidget = function(name) {
      delete $rootScope.widgets[name];
      WidgetService.setWidgets($rootScope.widgets);
    };

    io.socket.on('widgetChange', function() {
      console.log('widgetChange');
    });

  });