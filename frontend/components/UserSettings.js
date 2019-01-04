import Link from 'next/link';
import User from './User';
import DeleteUser from './DeleteUser';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const StyledBody = styled.a`
	font-size: 2rem;
  /* background-color: black; */
  color: black;
  p {
    display: inline-block;
  }
  a {
    display: inline-block;
    font-size: 1rem;
    background-color: black;
    color: white;
    padding: 10px 20px;
    margin: 20px;
  }
	button {
		display: inline-block;
		font-size: 1rem;
		background-color: red;
		color: white;
		padding: 10px 30px;
	}
	h2 {
		color: #3399ff;
		display: inline-block;
	}
	h3 {
		margin-bottom: 0;
		margin-top: 0;
	}
`;

const UserDetails = () => (
  <>
  <StyledBody>
    <User>
      {({ data: { me } }) => (
        <>
          <h2>Account Settings</h2>
          <br></br>
          { me && (
            <>
                <p>Click here to update your profile information</p>
                <Link href={{
                  pathname: '/update',
                  query: { id: me.id },
                }}>
                  <a className="userLink">
                    Update Account
                  </a>
                </Link>
                { !me.stripeToken && (
                  <>
                  <p>Click here to start recieving requests</p>
                    <Link href={{
                      pathname: '/account',
                      query: { id: me.id },
                    }}>
                        <a className="userLink">
                          Create Payment Info
                        </a>
                    </Link>
                  </>
                )}
								{ !me.bankToken && (
                  <>
                  <p>Click here to attach a card so that you can start recieving payouts</p>
									<Link href={{
										pathname: '/bank',
										query: { id: me.id },
									}}>
											<a className="userLink">
												Create Financial Info
											</a>
									</Link>
                  </>
								)}
                { me.stripeToken && (
                    <>
                      <p>Click her to update your fincancial profile for recieving requests</p>
                      <Link href={{
                        pathname: '/accupdate',
                        query: { id: me.id },
                      }}>
                          <a className="userLink">
                            Update Payment Info
                          </a>
                      </Link>
                    </>
                )}
								{ me.bankToken && (
                  <>
                  <p>Click her to attach a new card so that you can continue recieving payouts</p>
									<Link href={{
										pathname: '/bank',
										query: { id: me.id },
									}}>
											<a className="userLink">
												Update Financial Info
											</a>
									</Link>
                  </>
								)}
								<br></br>
								<>
									<p>Click here to change your email preferences</p>
									<Link href={{
										pathname: '/preferences',
									}}>
											<a className="userLink">
												Update Email Preferences
											</a>
									</Link>
								</>
								<br></br>
								<DeleteUser id={me.id}>Delete Account</DeleteUser>

            </>
          )}
          { !me && (
            <>
              <h2>Sorry this is not your account</h2>
            </>
          )}
        </>
      )}
    </User>
  </StyledBody>
  </>
);

export default UserDetails;
