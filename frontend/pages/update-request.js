import RequestArtistUpdate from '../components/RequestArtistUpdate';
import PleaseSignIn from '../components/PleaseSignIn';

const RequestUpdate = props => (
	<div>
		<PleaseSignIn>
			<RequestArtistUpdate id={ props.query.id } />
		</PleaseSignIn>
	</div>
)

export default RequestUpdate;
