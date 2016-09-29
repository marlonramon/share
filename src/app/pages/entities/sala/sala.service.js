(function() {
    'use strict';
    angular
        .module('BlurAdmin.pages.entities.sala')
        .factory('Sala', Sala);

    Sala.$inject = ['$resource'];

    function Sala ($resource) {
        var resourceUrl =  'api/sala/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();