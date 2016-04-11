AragornAppControllers.controller('LayoutCtrl', function($scope, $rootScope, $ionicGesture, $state, WidgetService) {

  $scope.confirm = function() {
    for(var id in $rootScope.widgets) {
      var widget = $rootScope.widgets[id];
      var $ele = $("#" + id);

      // widget.position = $ele.position();
      widget.style = {
        position: 'absolute',
        left: $ele.position().left,
        top: $ele.position().top
      }
    }

    WidgetService.setWidgets($rootScope.widgets);

    $state.go('app.control');

  }


});
