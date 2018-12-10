import Order from '../components/Order';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const OrderPage = props => (
	<div>
		<PleaseSignIn>
      <Order id={props.query.id} />
		</PleaseSignIn>
	</div>
)

export default OrderPage;
