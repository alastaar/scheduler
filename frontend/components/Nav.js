import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (

		<User>
			{({ data: { me } }) => (
				<NavStyles>
					<Link href="/items">
						<a>Explore</a>
					</Link>
					<Link href="/orders">
						<a>Orders</a>
					</Link>`
					{ me && me.artist == 'yes' && (
						<>
							<Link href="/appointments">
								<a>Appointments</a>
							</Link>
							<Link href="/me">
								<a>Account</a>
							</Link>
							<Signout />
							<Mutation mutation={TOGGLE_CART_MUTATION}>
	              {(toggleCart) => (
	                <button onClick={toggleCart}>
	                  Pay
	                </button>
	              )}
	            </Mutation>

						</>
					)}
					{ me && me.artist == 'no' && (
						<>
							<Link href="/orders">
								<a>Appointments Status</a>
							</Link>
							<Link href="/me">
								<a>Account</a>
							</Link>
							<Signout />
						</>
					)}
					{ !me && (
						<>
							<Link href="/signup">
								<a>SignIn</a>
							</Link>`
						</>
					)}
				</NavStyles>
			)}
		</User>
);

export default Nav;
