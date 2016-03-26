angular.module('Aragorn.app.services')
.service('ControlService', function() {

  this.socket = io.sails.connect('http://desire.app:1337');

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
  }

});
