AragornCommonDirectives.directive(
  'draggableWidget', ['$ionicGesture', '$ionicScrollDelegate',
    function($ionicGesture, $ionicScrollDelegate) {
      return {
        restrict: 'A',
        scope: {
          draggable: '@',
          sorted: '&'
        },
        link: function(scope, element, attrs) {
          var dragging = null,
            placeholder = null,
            offsetX = 0,
            offsetY = 0,
            marginTop = 0;
          var cardSet, initialIndex, currentIndex, animating = false;

          var settings = {
            draggable: scope.draggable ? scope.draggable : '.card',
            duration: 200
          };

          var touchHold = function touchHold(e) {
            // Get the element we're about to start dragging
            dragging = $(e.target).closest(settings.draggable);
            console.log(dragging);
            if (!dragging.length) dragging = null;
            if (dragging) {
              // Get the initial index

              var position = dragging.position();

              // Get relative position of touch
              var clientX = e.gesture.touches[0].clientX;
              var clientY = e.gesture.touches[0].clientY;
              offsetY = clientY - position.top - element.offset().top;
              offSetX = clientX - position.left - element.offset().top;

              // Switch to Absolute position at same location
              dragging.css({
                  position: 'absolute',
                  zIndex: 1000,
                  left: position.left + 'px',
                  top: position.top + 'px',
                  width: dragging.outerWidth() + 'px'
                })
                .addClass('dragging');

              window.dragging = dragging;

            }
          }
          var holdGesture = $ionicGesture.on('hold', touchHold, element);

          var touchMove = function touchMove(e) {
            if (dragging) {
              e.stopPropagation();
              touchX = e.touches ? e.touches[0].clientX : e.clientX;
              touchY = e.touches ? e.touches[0].clientY : e.clientY;
              var newTop = touchY - offsetY - element.offset().top;
              var newLeft = touchX - offsetX - element.offset().left;

              // Reposition the dragged element
              dragging.css({
                'top': newTop + 'px',
                'left': newLeft + 'px'
              });

            }
          };

          var touchMoveGesture = $ionicGesture.on('touchmove', touchMove, element);
          var mouseMoveGesture = $ionicGesture.on('mousemove', touchMove, element);

          var touchRelease = function touchRelease(e) {
              if (dragging) {
                  var newPosition = {
                    top: dragging.position().top - (dragging.outerHeight() - dragging.innerHeight()),
                    left: dragging.position().left = (dragging.outerWidth() - dragging.innerWidth())
                  }

                  console.log(dragging.innerWidth());

                  // Set element back to normal
                  dragging.css({
                      position: newPosition,
                      width: dragging.outerWidth() + 'px'

                  }).removeClass('dragging');

                  // // Remove placeholder
                  // placeholder.remove();
                  // placeholder = null;

                  dragging = null;

                  // clearInterval(scrollInterval);
              }
          };
          var releaseGesture = $ionicGesture.on('release', touchRelease, element);


        }
      };
    }
  ]);
