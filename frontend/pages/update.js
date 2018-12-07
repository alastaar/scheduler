import UserDetailsUpdate from '../components/UserDetailsUpdate';
// import Link from 'next/link';

const Update = props => (
	<div>
		<UserDetailsUpdate id={ props.query.id }/>
	</div>
)

export default Update;
