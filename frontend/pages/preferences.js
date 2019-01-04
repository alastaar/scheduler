import EmailPreferences from '../components/EmailPreferences';
import PleaseSignIn from '../components/PleaseSignIn';

const PermissionsPage = props => (
	<div>
		<PleaseSignIn>
			<EmailPreferences />
		</PleaseSignIn>
	</div>
)

export default PermissionsPage;
