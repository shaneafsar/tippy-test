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
  actions: {
    onTipChange: function(newTipValue) {
      this.set('tipValue', newTipValue);
    },
    onSubmit: function(e) {
      debugger;
      e.preventDefault();
    }
  }
});
