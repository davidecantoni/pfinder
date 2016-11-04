(function(){
  'use strict';

  app.controller('PropertiesController', function($scope, $http, Carousel) {
    $scope.Carousel = Carousel;
    $scope.state = 'loading';

    $scope.properties = $http({
      method: 'GET',
      url: 'https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1',
      async: false
    }).success(function(response) {
      $scope.properties = response.data;
      $scope.state = 'loaded';
    });

  });

})();
