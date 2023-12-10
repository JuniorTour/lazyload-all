import ScrollLazyLoader from './ScrollLazyloader';
import IntersectionLazyLoader from './IntersectionLazyLoader';
import { MODES, ATTRS } from './const';

export default class LazyLoadAll {
  lazyLoader = null;

  constructor(options) {
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
  }
}
