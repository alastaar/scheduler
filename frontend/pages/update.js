import UserDetailsUpdate from '../components/UserDetailsUpdate';
// import Link from 'next/link';
import PleaseSignIn from '../components/PleaseSignIn';

const Update = props => (
	<div>
		<PleaseSignIn>
			<UserDetailsUpdate id={ props.query.id }/>
		</PleaseSignIn>
	</div>
)

export default Update;
