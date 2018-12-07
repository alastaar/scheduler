import SingleUserBlock from '../components/SingleUserBlock';


const Artist = props => (
	<div>
		<SingleUserBlock id={ props.query.id }/>
	</div>
)

export default Artist;
