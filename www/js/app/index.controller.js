AragornAppControllers
.controller('IndexCtrl', function($rootScope, WidgetService) {
    $rootScope.widgets = {};

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