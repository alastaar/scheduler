import UserDetails from '../components/UserDetails';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const Me = props => (
	<div>
		<PleaseSignIn>
			<UserDetails />
		</PleaseSignIn>
	</div>
)

export default Me;
