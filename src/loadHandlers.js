import { DATA_PROP_PREFIX, ATTRS } from './const';

function loadSources(sourceEles, srcAttrName = ATTRS.dataSrc) {
  if (!sourceEles?.length) {
    console.warn(`[lazyload-all] loadSource no ele.`);
    return;
  }
  sourceEles.forEach((ele) => {
    const srcVal = ele.getAttribute(srcAttrName);
    ele.setAttribute(srcAttrName.replace(DATA_PROP_PREFIX, ''), srcVal);
  });
}

function loadVideo(videoEle) {
  if (!videoEle) {
    console.warn(`[lazyload-all] processVideoSource no videoEle.`);
    return;
  }
  const sourceEles = videoEle.querySelectorAll('source');
  if (!sourceEles || !sourceEles.length) {
    loadSrc(videoEle);
    return;
  }
  loadSources(sourceEles);
  // 重要！不然只修改 source && src 不会触发 Video 加载
  videoEle.load();
}

function loadBgImg(ele) {
  if (!ele) {
    return;
  }
  const bgSrcVal = ele.getAttribute(ATTRS.dataBgSrc);
  if (bgSrcVal) {
    ele.setAttribute('style', `background-image: url(${bgSrcVal})`);
  }
}

function loadSrc(ele) {
  const srcAttrName = ATTRS.dataSrc;
  const srcVal = ele.getAttribute(srcAttrName);
  if (!srcVal) {
    console.warn(`[lazyload-all] lazyload ele no src | srcset value.`);
    return;
  }
  ele.setAttribute(srcAttrName.replace(DATA_PROP_PREFIX, ''), srcVal);
  ele.setAttribute(ATTRS.dataLaztloaded, true);
}

function loadPicture(ele) {
  if (!ele) {
    console.warn(`[lazyload-all] loadPicture no ele input.`);
    return;
  }
  const sourceEles = ele.querySelectorAll('source');
  if (!sourceEles || !sourceEles.length) {
    return;
  }
  loadSources(sourceEles, ATTRS.dataSrcset);
}

const loadHandlers = {
  IMG: loadSrc,
  VIDEO: loadVideo,
  PICTURE: loadPicture,
  IFRAME: loadSrc,
};

export function onIntersectCb(ele) {
  if (ele.getAttribute(ATTRS.dataLaztloaded)) {
    return;
  }
  const tag = ele.tagName;
  let load = loadHandlers[tag];

  // 触发资源加载
  if (load) {
    load(ele);
  } else if (ele.getAttribute(ATTRS.dataBgSrc)) {
    loadBgImg(ele);
  }
}
