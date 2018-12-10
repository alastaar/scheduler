import OrderList from '../components/OrderList';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const OrderListPage = props => (
	<div>
		<PleaseSignIn>
      <OrderList />
		</PleaseSignIn>
	</div>
)

export default OrderListPage;
