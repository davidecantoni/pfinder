(function(){
'use strict';

app.config(function($mdThemingProvider, $mdIconProvider) {
  var background = $mdThemingProvider.extendPalette('grey', {
    'A100': 'f2f2f2'
  });
  $mdThemingProvider.definePalette('background', background);
  $mdThemingProvider.theme('default');

  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue', {
      'default': '400',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': 'A100'
    })
    .backgroundPalette('grey')
    .accentPalette('blue-grey', {
      'default': '200' // use shade 200 for default, and keep all other shades the same
    });

  // Since we're using fontawesome instead of material icons
  $mdIconProvider
    .defaultIconSet('/icons/sets/core-icons.svg', 24);
});

app.filter('limitWordsTo', function () {
  return function (value, wordwise, max, tail) {
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        //Also remove . and , so its gives a cleaner result.
        if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
          lastspace = lastspace - 1;
        }
        value = value.substr(0, lastspace);
      }
    }

    return value + (tail || ' …');
  };
});

app.controller('MainController', function($scope, $mdSidenav, $mdMedia) {
  $scope.toggleSidebar = function() {
    $mdSidenav('left').toggle();
  };
  // Detecting which media query user is currently on
  $scope.$mdMedia = $mdMedia;
});
})();
