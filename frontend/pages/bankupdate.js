import UpdateBankInfo from '../components/UpdateBankInfo';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const BankUpdate = props => (
	<div>
		<PleaseSignIn>
				<UpdateBankInfo id={ props.query.id } />
		</PleaseSignIn>

	</div>
)

export default BankUpdate;
