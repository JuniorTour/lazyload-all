import ScrollLazyLoader from './scrollLazyloader';
import IntersectionLazyLoader from './IntersectionLazyLoader';
import { MODES, ATTRS } from './const';

export default class LazyLoadAll {
  lazyLoader = null;
  options = {};

  constructor(options) {
    this.options = options;
    if (options.mode === MODES.scroll) {
      this.lazyLoader = new ScrollLazyLoader(options);
    } else if (options.mode === MODES.intersectionObserver) {
      this.lazyLoader = new IntersectionLazyLoader(options);
    }
  }

  update() {
    const lazyloadEles = document.querySelectorAll(`[${ATTRS.dataLaztload}]`);

    lazyloadEles.forEach((ele) => {
      this.lazyLoader.addTarget(ele);
    });

    if (this.options.mode === MODES.scroll) {
      // scroll 模式，目标元素更新时，运行一次runLoad()，
      // 从而实现页面刷新，滚动位置不变时，仍能触发懒加载
      this.lazyLoader.runLoad(this.options);
    }
  }
}
