(function(){
  'use strict';

  app.controller('PropertiesController', function($scope, $http) {
    $scope.state = 'loading';

    $scope.properties = $http({
      method: 'GET',
      url: 'https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1',
      async: false
    }).success(function(response) {
      $scope.properties = response.data;
      $scope.state = 'loaded';
    });

    /**** Carousel logic in pure js ***/
    var slides = document.getElementsByClassName('properties__carousel-item');
    console.log(slides.length)
    var currentSlide = 0;
    setInterval(nextSlide,5000);

    function nextSlide(){
      goToSlide(currentSlide+1);
    }

    function previousSlide(){
      goToSlide(currentSlide-1);
    }

    function goToSlide(n){
      slides[currentSlide].className = 'properties__carousel-item';
      currentSlide = (n+slides.length)%slides.length;
      setTimeout(function(){
        slides[currentSlide].className = 'properties__carousel-item properties__carousel-item--showing';
      }, 800);
    }

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function(){
      nextSlide();
    };
    previous.onclick = function(){
      previousSlide();
    };

  });

})();
