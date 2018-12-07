import RequestArtist from '../components/RequestArtist';
// import Link from 'next/link';

const Request = props => (
	<div>
		<RequestArtist id={ props.query.id } name={ props.query.name } email={ props.query.email } price={ props.query.price } />
	</div>
)

export default Request;
