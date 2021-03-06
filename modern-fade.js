// Generated by CoffeeScript 1.6.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.ModernFade = (function() {
    function ModernFade(wrapper, _options) {
      this.wrapper = wrapper;
      if (_options == null) {
        _options = {};
      }
      this.log = __bind(this.log, this);
      this.mergeAttributes = __bind(this.mergeAttributes, this);
      this.refresh = __bind(this.refresh, this);
      this.startTimeout = __bind(this.startTimeout, this);
      this.afterTransition = __bind(this.afterTransition, this);
      this.transition = __bind(this.transition, this);
      this.elements = document.querySelectorAll("" + this.wrapper + " > *");
      this.index = this.elements.length - 1;
      this.elements[this.index].className += 'in';
      this.options = this.mergeAttributes(_options, {
        delay: 2000,
        time: 1600
      });
      this.startTimeout();
    }

    ModernFade.prototype.transition = function() {
      this.t_out = this.elements[this.index];
      this.next = this.index - 1 >= 0 ? this.index - 1 : this.elements.length - 1;
      this.t_in = this.elements[this.next];
      this.t_out.className = this.t_out.className.replace('in', '');
      this.t_out.className += "out";
      this.t_in.className += "in";
      return setTimeout(this.afterTransition, this.options.time);
    };

    ModernFade.prototype.afterTransition = function() {
      this.t_out.className = this.t_out.className.replace("out", "");
      this.index = this.next;
      return this.startTimeout();
    };

    ModernFade.prototype.startTimeout = function() {
      return setTimeout(this.transition, this.options.delay);
    };

    ModernFade.prototype.refresh = function(_index) {
      this.elements = document.querySelectorAll("" + this.wrapper + " > *");
      if (_index) {
        return this.index = _index;
      }
    };

    ModernFade.prototype.mergeAttributes = function(obj1, obj2) {
      var key, obj3, val;
      obj3 = {};
      for (key in obj2) {
        val = obj2[key];
        obj3[key] = val;
      }
      for (key in obj1) {
        val = obj1[key];
        obj3[key] = val;
      }
      return obj3;
    };

    ModernFade.prototype.log = function(msg) {
      return console.log('ModernFade', msg);
    };

    return ModernFade;

  })();

}).call(this);
