(function () {
  'use strict';

  angular.module('BlurAdmin.pages.entities.sala', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('entities.sala', {
          url: '/sala',
          templateUrl: 'app/pages/entities/sala/sala.html',
          title: 'Sala',
          sidebarMeta: {
            order: 900,
          },
          controller: 'SalaController',
          controllerAs: 'vm',
        });
  }

})();