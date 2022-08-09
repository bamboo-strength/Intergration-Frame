import { registerMicroApps } from 'qiankun';

function lowerCamelCase(path: string) {
  const content = path.startsWith('/') ? path.slice(1) : path;
  return content.replace(/\/(\w)/g, function($: string, $1: string) {
    return $1.toUpperCase();
  })
}

// 微应用静态实例
const MICRO_CONF = [
  {
    name: 'micro-front-vue',
    entry: 'http://127.0.0.1:9527/',
    container: '#microApplication',
    activeRule: '/#/portal'
  }
];

// 获取微应用实例
const getMicro = () => MICRO_CONF;

// 注册 微应用实例
const registerApps = () => {
  const apps = getMicro();

  const config: any = {
    // 挂载前回调
    beforeLoad: [
      (app: any) => {
        console.log(`${app.name} before load micro app!`);
      }
    ],
    // 挂载后回调
    beforeMount: [
      (app: any) => {
        console.log(`${app.name} before mount micro app!`);
      }
    ],
    // 卸载后回调
    afterUnmount: [
      (app: any) => {
        console.log(`${app.name} after unload micro app!`);
      }
    ]
  };
  registerMicroApps(apps, config);
}

export {
  getMicro,
  registerApps
}
