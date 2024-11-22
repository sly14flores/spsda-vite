// CUSTOM ICON COMPONENTS
import ChartIcon from '@/icons/ChartIcon';
import ReceiptOutlined from '@/icons/ReceiptOutlined';
import ChartDonut from '@/icons/sidebar/ChartDonutIcon'; // ==============================================================

// ==============================================================
export const EARNING_LIST = [{
  id: 1,
  amount: 4550,
  Icon: ChartIcon,
  name: 'Net Earnings',
  iconColor: 'primary'
}, {
  id: 2,
  amount: 80,
  name: 'Change',
  Icon: ChartDonut,
  iconColor: 'warning'
}, {
  id: 3,
  amount: 2800,
  name: 'Fees',
  Icon: ReceiptOutlined,
  iconColor: 'info'
}];