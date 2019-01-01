import Link from 'next/link';
import User from './User';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const StyledBody = styled.a`
	font-size: 2rem;
  /* background-color: black; */
  color: black;
  a {
    font-size: 1rem;
    background-color: black;
    color: white;
    padding: 10px 20px;
    margin: 20px;
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
          <h2>Account Details</h2>
          { me && (
            <>
              <h3>Hello { me.name } { me.lastName }</h3>
							{ !me.stripeToken && (
								<p>	&#10060; you are not approved to start taking requests</p>
							)}
							{ me.stripeToken && (
								<p>&#9989; you are approved to start taking requests</p>
							)}
							{ !me.bankToken && (
								<p>	&#10060; you are not approved to start recieving payouts</p>
							)}
							{ me.bankToken && (
								<p>&#9989; you are approved to start receiving payouts</p>
							)}
              <h3>Email: { me.email }</h3>
              <h3>Handle: { me.instagramHandle }</h3>
              <h3>Shop: { me.shop }</h3>
              <h3>Price: { formatMoney(me.price) }</h3>
              <h3>Bio: { me.bio }</h3>
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
									<Link href={{
										pathname: '/bank',
										query: { id: me.id },
									}}>
											<a className="userLink">
												Create Financial Info
											</a>
									</Link>
								)}
                { me.stripeToken && (
                    <>
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
									<Link href={{
										pathname: '/bankupdate',
										query: { id: me.id },
									}}>
											<a className="userLink">
												Update Financial Info
											</a>
									</Link>
								)}

            </>
          )}
          { !me && (
            <>
              <h2>Sorry this is not your account please move along </h2>
            </>
          )}
        </>
      )}
    </User>
  </StyledBody>
  </>
);

export default UserDetails;
