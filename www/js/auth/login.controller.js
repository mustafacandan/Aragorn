angular.module('Aragorn.auth.controllers', [])
.controller('LoginCtrl', function($scope, $state, $ionicModal, AuthService){
    $scope.user = {
        identifier: '',
        password: ''
    }
    
    $scope.doLogIn = doLogIn;
    
    
    
    
    
    function doLogIn() {
        AuthService.login($scope.user)
            .then(function(res) {
                if(res.status === 200 && res.data) {
                    $state.go('app.index');
                }
            })
            .catch(function() {
                $scope.error = 'Unmatched user name and password, please retry.';
            })
        
        ;
    }
    

});