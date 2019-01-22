import SingleRequest from '../components/SingleRequest';
import PleaseSignIn from '../components/PleaseSignIn';


const Item = props => (
	<div>
		<PleaseSignIn>
			<SingleRequest id={ props.query.id }/>
		</PleaseSignIn>
	</div>
)

export default Item;
