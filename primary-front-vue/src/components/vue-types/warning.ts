import warning, { resetWarned } from './warning-utils';

export { resetWarned };

export default (valid: any, component: any, message = '') => {
  warning(valid, `[antdv: ${component}] ${message}`);
};
