angular.module('Aragorn.app.services')
.service('WidgetService', function(CONFIG, localStorageService, $http) {

  this.getAvaiableWidgets = function() {
    return {
      weather: {
        id: 'weather',
        title: '天气',
        class: 'ion-ios-partlysunny',
        config: {
          city: '上海'
        }
      },

      clock: {
        id: 'clock',
        title: '时钟',
        class: 'ion-clock'
      },

      music: {
        id: 'music',
        title: '音乐',
        class: 'ion-headphone'
      },

      greetings: {
        id: 'greetings',
        title: '问候',
        class: 'ion-ios-heart'
      }

      // news: {
      //   id: 'news',
      //   title: '新闻',
      //   class: 'ion-easel'

      // },

      // stock: {
      //   id: 'stock',
      //   title: '股票',
      //   class: 'ion-arrow-graph-up-right'
      // }
    }
  };

  this.setWidgets = function(widgets) {
      var data = {
          user: localStorageService.get('authData').userName,
          widgets: widgets
      }
      io.socket.post(CONFIG.API_ADDRESS + '/widgets', data);
  }

  // this.getWidgets = function() {
  //     var data = {
  //         user: localStorageService.get('authData').userName
  //     }
  //     console.log(io.socket.get(CONFIG.API_ADDRESS + '/widgets', data));
  // }

  this.registRoom = function() {
      var data = {
          user: localStorageService.get('authData').userName
      }
      io.socket.post(CONFIG.API_ADDRESS + '/regist-room', data);
  }

});
