import LazyLoadAll from './LazyLoadAll';
import { onIntersectCb } from './loadHandlers';
import { MODES } from './const';

export function initLazyloadAll(options) {
  // debugger;
  const lazyLoadeAllInstance = new LazyLoadAll({
    onIntersectCb,
    once: true,
    // mode: MODES.scroll,
    mode: MODES.intersectionObserver,
    ...options,
  });

  lazyLoadeAllInstance.update();

  return lazyLoadeAllInstance;
}
