import Link from 'next/link';
import Requests from '../components/RequesterList';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => (
	<div>
		<PleaseSignIn>
			<Requests page={ parseFloat(props.query.page) || 1 } />
		</PleaseSignIn>
	</div>
)

export default Home;
