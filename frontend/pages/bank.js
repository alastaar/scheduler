import CreateBankInfo from '../components/CreateBankInfo';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const Bank = props => (
	<div>
		<PleaseSignIn>
				<CreateBankInfo id={ props.query.id } />
		</PleaseSignIn>

	</div>
)

export default Bank;
