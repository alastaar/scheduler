import Link from 'next/link';
import ChatList from '../components/ChatList';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => (
	<div>
		<PleaseSignIn>
			<ChatList />
		</PleaseSignIn>
	</div>
)

export default Home;
