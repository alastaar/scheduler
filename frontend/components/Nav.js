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
					{ me && me.artist == 'yes' && (
						<>
							<Link href="/calendar">
								<a>Calendar</a>
							</Link>
							<Link href="/appointments">
								<a>Appointments</a>
							</Link>
							<Link href="/ur-request">
								<a>Requests</a>
							</Link>
							<Link href="/chats">
								<a>Chats</a>
							</Link>
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
							<Link href="/ur-request">
								<a>Ur Requests</a>
							</Link>
							<Mutation mutation={TOGGLE_CART_MUTATION}>
								{(toggleCart) => (
									<button onClick={toggleCart}>
										Pay
									</button>
								)}
							</Mutation>
						</>
					)}
				</NavStyles>
			)}
		</User>
);

export default Nav;
