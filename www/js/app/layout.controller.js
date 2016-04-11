AragornAppControllers.controller('LayoutCtrl', function($scope, $rootScope, $ionicGesture, $state) {

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

    var socket = ControlService.socket;

    socket.emit('controlWidgetChange', $rootScope.widgets);
    $state.go('tab.control');

  }


});
