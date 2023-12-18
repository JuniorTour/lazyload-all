function throttle(callback, limit) {
  var waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}

export default class ScrollLazyLoader {
  inited = false;
  targetEles = [];

  constructor(options) {
    this.init(options);
    this.inited = true;
  }

  runLoad({ onIntersectCb, once }) {
    this.targetEles.forEach((ele) => {
      // 获取图片与视口顶部的相对距离
      const topPos = ele.getBoundingClientRect().top;
      // 与 视口高度（window.innerHeight）对比，判断是否在视口内
      if (topPos < window.innerHeight) {
        // debugger;
        onIntersectCb(ele);
        if (once) {
          this.removeTarget(ele);
        }
      }
    });
  }

  init(options) {
    if (!options.onIntersectCb) {
      console.warn(
        `initScrollLazyLoader have falsy onIntersectCb=${options.onIntersectCb} `,
      );
      return;
    }
    if (this.inited) {
      return;
    }

    window.addEventListener(
      'scroll',
      throttle(() => {
        this.runLoad(options);
      }),
      200,
    );
  }

  addTarget(ele) {
    if (!ele) {
      return;
    }
    this.targetEles.push(ele);
  }

  removeTarget(ele) {
    if (!ele) {
      return;
    }
    this.targetEles.splice(this.targetEles.indexOf(ele), 1);
  }
}
