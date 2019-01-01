import StripeAccountCreation from '../components/StripeAccountCreation';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const Account = props => (
	<div>
		<PleaseSignIn>
				<StripeAccountCreation id={ props.query.id } />
		</PleaseSignIn>

	</div>
)

export default Account;
