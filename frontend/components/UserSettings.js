import Link from 'next/link';
import User from './User';
import DeleteUser from './DeleteUser';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const StyledBody = styled.div`
	width: 200px;
	margin: 0 auto;
  /* background-color: black; */
  color: black;
  p {
    display: inline-block;
  }
  a {
    display: inline-block;
    font-size: 1rem;
		font-weight: 700;
    background-color: black;
    color: white;
    padding: 10px 20px;
    margin: 10px;
		width: 200px;
		text-align: center;
  }
	button {
		display: inline-block;
		font-size: 1rem;
		background-color: red;
		color: white;
		padding: 10px 30px;
		margin: 10px;
		width: 200px;
		text-align: center;
	}
	h2 {
		color: #3399ff;
		display: inline-block;
		width: 200px;
		text-align: center;
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
                <Link href={{
                  pathname: '/update',
                  query: { id: me.id },
                }}>
                  <a className="userLink">
                    Update Account Info
                  </a>
                </Link>
                { !me.stripeToken && me.artist == "yes" && (
                  <>
									<br></br>
                    <Link href={{
                      pathname: '/account',
                      query: { id: me.id },
                    }}>
                        <a className="userLink">
                          Create Financial Info
                        </a>
                    </Link>
                  </>
                )}
								{ !me.bankToken && me.artist == "yes" && (
                  <>
									<br></br>
									<Link href={{
										pathname: '/bank',
										query: { id: me.id },
									}}>
											<a className="userLink">
												Create Payment Info
											</a>
									</Link>
                  </>
								)}
                { me.stripeToken && me.artist == "yes" && (
                    <>
                      <br></br>
                      <Link href={{
                        pathname: '/accupdate',
                        query: { id: me.id },
                      }}>
                          <a className="userLink">
                            Update Financial Info
                          </a>
                      </Link>
                    </>
                )}
								{ me.bankToken && me.artist == "yes" && (
                  <>
                  <br></br>
									<Link href={{
										pathname: '/bank',
										query: { id: me.id },
									}}>
											<a className="userLink">
												Update Payment Info
											</a>
									</Link>
                  </>
								)}
								<br></br>
								<>
									<Link href={{
										pathname: '/preferences',
									}}>
											<a className="userLink">
												Update Email Preferences
											</a>
									</Link>
								</>
								<>
								<br></br>
								{ me.bankToken && me.artist == "yes" && (
									<>
										<Link href={{
											pathname: '/blackout',
											query: { id: me.id },
										}}>
												<a className="userLink">
													Update Black Out dates
												</a>
										</Link>
									</>
								)}
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
