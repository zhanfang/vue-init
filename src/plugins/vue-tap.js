;(function(){
  var vueTap = {}

  vueTap.install = function(Vue){
    Vue.directive('tap', {
      
      isFu: true,
      // 可以让自定义指令接受内联语句
      acceptStatement: true,
      // 可以给指令指定一个优先级。如果没有指定，普通指令默认是 1000
      priority: Vue.directive('on').priority,

      bind: function () {
        // 只调用一次，我觉得应该只在此初始化参数
        var self = this

        self.handler = function () {}

        self.tapInfo = {
          x1: null,
          x2: null,
          y1: null,
          y2: null
        }

        self.touchstartFn = function(e){
          if(self.modifiers.stopPropagation) e.stopPropagation()
          if(self.modifiers.preventDefault) e.preventDefault()
          self._touchstart(self, e)
        }

        self.touchmoveFn = function (e) {
          self._touchmove(self, e)
        }

        self.touchendFn = function(e) {
          self._touchend(self, e)
        }

        self.touchcancelFn = function(e) {
          self._touchcancel(self, e)
        }

        this.el.addEventListener('touchstart', self.touchstartFn.bind(this), false)
        this.el.addEventListener('touchmove', self.touchmoveFn.bind(this), false)
        this.el.addEventListener('touchend', self.touchendFn.bind(this),false)
        this.el.addEventListener('touchcancel', self.touchcancelFn.bind(this), false)
      },
      update: function (fn) {
        // 初始化参数后调用
        if (typeof fn !== 'function') return console.error('the tap event handler must be function!')

        this.handler = fn
      },
      unbind: function () {
        // 只调用一次，在指令从元素上解绑时调用
        this.el.removeEventListener('touchstart', this.touchstartFn)
        this.el.removeEventListener('touchmove', this.touchmoveFn)
        this.el.removeEventListener('touchend', this.touchendFn)
        this.el.removeEventListener('touchcancel', this.touchcancelFn)
        this.touchstartFn = this.touchmoveFn = this.touchendFn = this.touchcancelFn = null
        this.handler = this.tapInfo = null
      },
      _touchstart: function (obj, evt) {
        if(!evt.touches) return
        var touch = evt.touches[0]
        obj.tapInfo.x1 = touch.pageX
        obj.tapInfo.y1 = touch.pageY
      },
      _touchmove: function (obj, evt) {
        if(!evt.touches) return
        var touch = evt.touches[0]
        obj.tapInfo.x2 = touch.pageX
        obj.tapInfo.y2 = touch.pageY
      },
      _touchend: function (obj, evt) {
        if(!evt.changedTouches) return
          if ((obj.tapInfo.x2 && Math.abx(obj.tapInfo.x1 - obj.tapInfo.x2) > 30) || (obj.tapInfo.y2 && Math.abx(obj.tapInfo.y1 - obj.tapInfo.y2) > 30)) {
            // swipe
          } else {
            obj.tapTimeout = setTimeout(function () {
              obj.handler(evt);
            }, 0)
          }

          obj.tapInfo.x1 = obj.tapInfo.y1 = obj.tapInfo.x2 = obj.tapInfo.y2 = null
      },
      _touchcancel: function (obj, evt) {
        clearTimeout(obj.tapTimeout)
      },
    })
  }

  if (typeof exports === 'object') {
    module.exports = vueTap
  } else if (typeof define === 'function' && define.amd) {
    define([], function(){
      return vueTap
    })
  } else {
    window.vueTap = vueTap
    Vue.use(vueTap)
  }
})()
