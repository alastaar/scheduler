import Link from 'next/link';
import Calendar from '../components/CalendarList';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => (
	<div>
		<PleaseSignIn>
			<Calendar />
		</PleaseSignIn>
	</div>
)

export default Home;
