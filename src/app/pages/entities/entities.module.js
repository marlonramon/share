(function () {
  'use strict';

  angular.module('BlurAdmin.pages.entities', [
    'BlurAdmin.pages.entities.sala',
    
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('entities', {
          url: '/entities',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Cadastros',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 800,
          },
        });
  }

})();