AragornAppControllers
.controller('IndexCtrl', function($rootScope, ControlService) {
    $rootScope.widgets = {};

    $rootScope.avaliableWidgets = ControlService.getAvaiableWidgets();
    
    $rootScope.addWidget = function(name) {
      $rootScope.widgets[name] = $rootScope.avaliableWidgets[name];
      ControlService.setWidgets($rootScope.widgets);
    }

    $rootScope.removeWidget = function(name) {
      delete $rootScope.widgets[name];
      ControlService.setWidgets($rootScope.widgets);
    }

    io.socket.on('widgetChange', function() {
        console.log('widgetChange');
    })
    
});