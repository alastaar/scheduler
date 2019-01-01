import SingleRequest from '../components/SingleRequest';


const Item = props => (
	<div>
		<SingleRequest id={ props.query.id }/>
	</div>
)

export default Item;
