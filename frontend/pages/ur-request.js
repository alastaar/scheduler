import Link from 'next/link';
import Requests from '../components/RequesterList';

const Home = props => (
	<div>
		<Requests page={ parseFloat(props.query.page) || 1 } />
	</div>
)

export default Home;
