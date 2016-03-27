angular.module('Aragorn.app.services')
.service('ControlService', function(CONFIG, localStorageService) {

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

      news: {
        id: 'news',
        title: '新闻',
        class: 'ion-easel'

      },

      stock: {
        id: 'stock',
        title: '股票',
        class: 'ion-arrow-graph-up-right'
      }
    }
  };
  
  this.setWidgets = function(widgets) {
      var data = {
          user: localStorageService.get('authData').userName,
          data: widgets
      }
      io.socket.post(CONFIG.API_ADDRESS + '/widgets', data);
  }

});
