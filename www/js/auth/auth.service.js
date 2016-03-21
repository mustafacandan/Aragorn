angular.module('Aragorn.app.services', [])

.service('AuthService', function(CONFIG, $http, localStorageService) {

    var _authData = {
        isAuth: false,
        userName: ''
    };

    var _login = function(user) {
        //clean data first
        _logout();

        return $http.post(CONFIG.API_ADDRESS + '/auth/local', user).then(
            
            function(response) {
                
                if (response.status === 200 && response.data) {
                    _authData.isAuth = true;
                    _authData.userName = response.data.username;
                    localStorageService.set('authData', _authData);
                }
                
                return response;
            }
        );
    };

    var _fillAuthData = function() {
        var data = localStorageService.get('authData');

        if (data) {
            _authData = data;
        }
    }

    var _logout = function() {
        localStorageService.remove('authData');
        _authData.isAuth = false;
        _authData.userName = '';
    }


    return {
        authData: _authData,
        login: _login,
        logout: _logout,
        fillAuthData: _fillAuthData

    }

});