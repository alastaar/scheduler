import Reset from '../components/Reset';
import Link from 'next/link';

const ResetPage = props => (
	<div>
		<Reset resetToken={props.query.resetToken} />
	</div>
)

export default ResetPage;
