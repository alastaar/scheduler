import UserSettings from '../components/UserSettings';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const Me = props => (
	<div>
		<PleaseSignIn>
			<UserSettings />
		</PleaseSignIn>
	</div>
)

export default Me;
