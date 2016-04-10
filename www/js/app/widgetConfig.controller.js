AragornAppControllers.controller('WidgetConfigCtrl', function($scope, $rootScope, $stateParams, $state, WidgetService) {
   $scope.id = $stateParams.id;

   $scope.confirm = function() {
       
     WidgetService.setWidgets($rootScope.widgets);
     $state.go('app.index');
   }

});