import { helper } from '@ember/component/helper';

export function arrayContains(params) {
  const [items, value] = params;
  return items.indexOf(value) > -1;
}

export default helper(arrayContains);
