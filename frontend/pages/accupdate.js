import StripeAccountUpdate from '../components/StripeAccountUpdate';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const Account = props => (
	<div>
		<PleaseSignIn>
				<StripeAccountUpdate id={ props.query.id } />
		</PleaseSignIn>

	</div>
)

export default Account;
