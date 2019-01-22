import Link from 'next/link';
import ChatSingle from '../components/ChatSingle';
import PleaseSignIn from '../components/PleaseSignIn';

const Home = props => (
	<div>
		<PleaseSignIn>
			<ChatSingle id={props.query.id} />
		</PleaseSignIn>
	</div>
)

export default Home;
