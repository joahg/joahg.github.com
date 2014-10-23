/*!
 * superSlider.js v1.3.3 (https://github.com/JoahG/superSlider.js)
 * Copyright 2014 Joah Gerstenberg
 * Licensed under MIT License (https://github.com/JoahG/superSlider.js/blob/gh-pages/LICENSE)
 */
(function($) { 
  $.fn.superSlider = function($scope) {
    // Set $scope to empty object if undefined
    $scope = $scope == undefined ? {} : $scope;

    // Local variables for jQuery selecting/setup
    var slider = this;
    var lis = this.find('li');
    var ul = this.find('ul:not(.pagination)');
    var larrow = $scope['left-arrow-class'] ?  this.find($scope['left-arrow-class']) : this.find('.left-arrow');
    var rarrow = $scope['right-arrow-class'] ?  this.find($scope['right-arrow-class']) : this.find('.right-arrow');
    var larrow_src = $scope['left-arrow-src'] ?  $scope['left-arrow-src'] : 'img/slider/chevron-left.png';
    var rarrow_src = $scope['right-arrow-src'] ?  $scope['right-arrow-src'] : 'img/slider/chevron-right.png';
    var larrow_inactive_src = $scope['left-arrow-inactive-src'] ?  $scope['left-arrow-inactive-src'] : 'img/slider/chevron-left-inactive.png';
    var rarrow_inactive_src = $scope['right-arrow-inactive-src'] ?  $scope['right-arrow-inactive-src'] : 'img/slider/chevron-right-inactive.png';
    var pagination = undefined;

    // $scope variables for dealing with global attrs
    $scope.indices = lis.length;
    $scope.index_shown = 0;
    $scope.timer_speed = $scope.timer_speed ? $scope.timer_speed : 5000;
    $scope.timer_on = $scope.timer_on === true || $scope.timer_on === 'true' ? $scope.timer_on : false;
    $scope.pagination = $scope.pagination === true || $scope.pagination === 'true' ? $scope.pagination : false;
    $scope.callback = $scope.callback || function(slide) {};

    // $scope.init() to check window width and appropriately react
    $scope.init = function() {
      if ($(window).width() < 767) {
        $scope.magic_number = $scope['mobile_width'] ? $scope['mobile_width'] : 500;
        $scope.left_offset = $scope['left_offset_mobile'] || 0;
      } else {
        $scope.magic_number = $scope['desktop_width'] ? $scope['desktop_width'] : 1200;
        $scope.left_offset = $scope['left_offset_desktop'] || 40;
      }
    }

    // $scope.check_activity to add correct activity class names to arrows
    $scope.check_activity = function() {
      if ($scope.index_shown <= 0) { larrow.addClass('inactive').attr('src', larrow_inactive_src); }
      if ($scope.index_shown >= $scope.indices-1) { rarrow.addClass('inactive').attr('src', rarrow_inactive_src); }
      if ($scope.index_shown > 0) { larrow.removeClass('inactive').attr('src', larrow_src); }
      if ($scope.index_shown < $scope.indices-1) { rarrow.removeClass('inactive').attr('src', rarrow_src); }
    }

    // $scope.goto_slide to goto any slide in the gallery
    $scope.goto_slide = function(n) {
      $scope.init();
      ul.css('left', ($scope.left_offset + (n * (0-$scope.magic_number))).toString()+'px');
      $scope.index_shown = n;
      lis.removeClass('current');
      ul.find('li:nth-child('+($scope.index_shown+1)+')').addClass('current');
      if ($scope.pagination) {
        pagination.find('li').removeClass('active');
        pagination.find('li:nth-child('+($scope.index_shown+1)+')').addClass('active');
      }
      $scope.check_activity();
      $scope.callback(ul.find('li.current'));
    }

    // $scope.paginate to create pagination when $scope.pagination == true
    $scope.paginate = function() {
      slider.append('<ul class="pagination"></ul>');
      pagination = slider.find('ul.pagination');
      for (var i = 0; i < $scope.indices; i++) { pagination.append('<li></li>'); }
      pagination.find('li:nth-child('+($scope.index_shown+1)+')').addClass('active');
      slider.on('click', '.pagination li:not(.active)', function() { 
        if ($(this).index() > $scope.index_shown) {
          slider.trigger('slideRight', $(this).index() - $scope.index_shown);
        } else if ($(this).index() < $scope.index_shown) {
          slider.trigger('slideLeft', $scope.index_shown - $(this).index());
        }
      });
    }

    // When the slider is ready...
    slider.ready(function(){
      // Clear any preexisting jQuery events
      slider.off('click', '.right-arrow');
      slider.off('click', '.left-arrow');
      slider.off('slideRight');
      slider.off('slideLeft');
      slider.off('slideTo');

      // Define the jQuery events for slider
      slider.on('slideRight', function(e, n) {
        return slider.trigger('slideTo', ($scope.index_shown + (n || 1) < $scope.indices ? $scope.index_shown + (n || 1) : 0));
      });

      slider.on('slideLeft', function(e, n) {
        return slider.trigger('slideTo', ($scope.index_shown - (n || 1) >= 0 ? $scope.index_shown - (n || 1) : $scope.indices - 1))
      });

      slider.on('click', '.right-arrow', function() { 
        return slider.trigger('slideRight');
      });

      slider.on('click', '.left-arrow',  function() { 
        return slider.trigger('slideLeft');
      });

      slider.on('slideTo', function(e, n) {
        return n !== undefined ? $scope.goto_slide(n) : false;
      })

      // Call init function to get window width
      $scope.init();
      $scope.check_activity();

      // Setup-y stuff
      lis.each(function(i,v) { $(v).css('left', i*$scope.magic_number); });
      ul.on('click', "li:not(.current)", function(e){ e.preventDefault(); $scope.goto_slide($(this).index()); });

      // Paginate slides if pagination == true
      if ($scope.pagination) { 
        $scope.paginate(); 
      }

      // TouchWipe-specific code
      if ($.fn.touchwipe !== undefined) {
        $(".slider").touchwipe({ 
          wipeLeft:  function() { slider.trigger('slideRight'); }, 
          wipeRight: function() { slider.trigger('slideLeft');  } 
        });
      }

      // Code for timer_on == true
      if ($scope.timer_on) {
        var timer = setInterval(function(){
          slider.trigger('slideRight');
        }, $scope.timer_speed);

        slider.on('mouseenter', function(){
          clearInterval(timer);
        });

        slider.on('mouseleave', function(){
          timer = setInterval(function(){
            slider.trigger('slideRight');
          }, $scope.timer_speed);
        });
      }
    });
  };
})(jQuery);