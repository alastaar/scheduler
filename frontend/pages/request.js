import RequestArtist from '../components/RequestArtist';
// import Link from 'next/link';
import PleaseSignIn from '../components/PleaseSignIn';

const Request = props => (
	<div>
		<PleaseSignIn>
			<RequestArtist id={ props.query.id } />
		</PleaseSignIn>
	</div>
)

export default Request;
