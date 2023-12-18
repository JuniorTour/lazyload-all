export default class IntersectionLazyLoader {
  observer = null;

  constructor(options) {
    this.init(options);
  }

  init({ onIntersectCb, once, ObserverOptions, afterLoadCb }) {
    if (!onIntersectCb) {
      console.warn(
        `initScrollLazyLoader have falsy onIntersectCb=${onIntersectCb} `,
      );
      return;
    }
    if (this.observer) {
      return;
    }

    // let ObserverOptions = {
    //   root: document.querySelector("#scrollArea"),
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    this.observer = new IntersectionObserver((entries) => {
      // 遍历所有观察的元素
      entries.forEach((entry) => {
        // 如果该元素进入了视口，就执行该元素对应的回调
        if (entry.isIntersecting) {
          const ele = entry.target;
          onIntersectCb(ele);
          if (once) {
            this.removeTarget(ele);
          }
          if (afterLoadCb) {
            afterLoadCb?.(ele);
          }
        } else {
          // onExit()
        }
      });
    }, ObserverOptions);
  }

  addTarget(ele) {
    if (!ele) {
      return;
    }
    this.observer.observe(ele);
  }

  removeTarget(ele) {
    if (!ele) {
      return;
    }
    this.observer.unobserve(ele);
  }
}
