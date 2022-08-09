import path from 'path';

const transformRoutesToReuseTab = (_item: any, basePath = '/', title?: any) => {
  return {
    code: title || _item.code,
    title: _item.title,
    path: path.resolve(basePath, _item.path),
    badge: 0,
    affix: _item.affix,
    reuse: _item.reuse
  }
}

const transform$routeToReuseTab = (_route: any) => {
  return {
    code: _route?.name,
    title: _route?.meta?.title,
    path: _route?.fullPath,
    badge: 0,
    affix: _route?.meta?.affix,
    reuse: !!_route?.meta?.reuse
  }
}

export const utils = {
  transformRoutesToReuseTab,
  transform$routeToReuseTab
}
