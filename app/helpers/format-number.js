import { helper } from '@ember/component/helper';

export function formatNumber([value]) {
  return `${parseFloat(value).toFixed(2)}`;
}

export default helper(formatNumber);
