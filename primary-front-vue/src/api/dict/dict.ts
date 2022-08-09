import axios from 'axios';

const api = axios.create({ baseURL: process.env.VUE_APP_COMMON_API });

const getDict = (params: any) => {
  return api.post('/dict/common/queryAll', params);
};

/** 根据科室查询用户-身份信息 */
const getIdentity = (params: any) => {
  return api.post('/api/user/findUserIdentities', params);
};

/** 获取配置中心数据 */
const getConfig = (params: any) => {
  return api.get('/api/config/getStringConfig', {
    params: params
  })
}

export const dict = {
  getDict,
  getIdentity,
  getConfig
};
