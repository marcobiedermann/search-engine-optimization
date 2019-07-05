(function(window, document) {
  'use strict';

  // Bling
  window.$ = document.querySelectorAll.bind(document);

  Node.prototype.on = window.on = function(name, fn) {
    this.addEventListener(name, fn);
  };

  NodeList.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
    this.forEach(function(element, i) {
      element.on(name, fn);
    });
  };

  // easing
  var easing = {
    linear: function(t) {
      return t;
    },
    easeInQuad: function(t) {
      return t * t;
    },
    easeOutQuad: function(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function(t) {
      return t * t * t;
    },
    easeOutCubic: function(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function(t) {
      return t * t * t * t;
    },
    easeOutQuart: function(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    },
  };

  // requestAnimationFrame
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  var i;
  var length = vendors.length;

  for (i = 0; i < length && !requestAnimationFrame; ++i) {
    requestAnimationFrame = [vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = [vendors[i] + 'CancelAnimationFrame'] || [vendors[i] + 'CancelRequestAnimationFrame'];
  }

  if (!requestAnimationFrame)
    requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);

      lastTime = currTime + timeToCall;

      return id;
    };

  if (!cancelAnimationFrame) {
    cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

  // scrollTo
  function scrollTo(Y, duration, easingFunction, callback) {
    var start = Date.now();
    var elem = document.documentElement.scrollTop ? document.documentElement : document.body;
    var from = elem.scrollTop;

    if (from === Y) {
      callback();
      return;
    }

    function scroll(timestamp) {
      var currentTime = Date.now();
      var time = Math.min(1, (currentTime - start) / duration);
      var easedT = easingFunction(time);

      elem.scrollTop = easedT * (Y - from) + from;

      if (time < 1) {
        requestAnimationFrame(scroll);
      } else {
        if (callback) {
          callback();
        }
      }
    }

    requestAnimationFrame(scroll);
  }

  $('a[href^="#"]').on('click', function() {
    scrollTo(document.getElementById(this.href.split('#')[1]).offsetTop, 800, easing.easeInOutQuad);
  });

  // Links
  var links = document.links;
  length = links.length;

  for (i = 0; i < length; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = '_blank';
    }
  }
})(window, document);
