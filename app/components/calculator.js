import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  totalBill: 0,
  tipValue: 0,
  tipAmount: computed('totalBill', 'tipValue', function() {
    return this.get('totalBill') * parseFloat(this.get('tipValue'));
  }),
  totalBillWithTip: computed('totalBill', 'tipAmount', function() {
    return this.get('tipAmount') + parseFloat(this.get('totalBill'));
  }),
  showTotal: computed('totalBillWithTip', function() {
    return (
      this.get('totalBillWithTip') > 0 && !isNaN(this.get('totalBillWithTip'))
    );
  }),
  didReceiveAttrs: function() {
    this._super(...arguments);
    const inputAmount = this.get('inputAmount');
    if (inputAmount && !isNaN(parseFloat(inputAmount))) {
      this.set('totalBill', parseFloat(inputAmount));
    }
  },
  actions: {
    onTipChange: function(newTipValue) {
      this.set('tipValue', newTipValue);
    },
    onSubmit: function(e) {
      e.preventDefault();
    }
  }
});
