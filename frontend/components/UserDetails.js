import Link from 'next/link';
import User from './User';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const StyledBody = styled.div`
	font-size: 2rem;
	width: 100%;
  color: black;
	font-family: 'Slabo 27px', serif;
  a {
		border-radius: 25px;
    font-size: 2.5rem;
    background-color: black;
    color: white;
    padding: 10px 20px;
		margin-top: 30px;
		text-align: center;
		display: inherit;
  }
`;

const Results = styled.div`
	font-size: 2rem;
	margin-top: 25px;
  color: black;
	border: 2px solid black;
	width: 50%;
	display: inline-grid;
	p{
		margin-left: 10%;
	}
	a {
		border-radius: 25px;
		text-align: center;
		width: 70%;
		font-size: 1.5rem;
		margin: 0 auto;
		background-color: black;
		color: white;
		padding: 10px 50px;
		margin-bottom: 20px;
	}
	@media only screen and (max-width: 600px) {
		display: block;
		width: 100%;
	}

`;

const MeData = styled.div`
	width: 50%;
	display: inline-block;
	margin-top: 25px;
	vertical-align: top;
	h2{
		margin: 0;
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
          { me && (
            <>
							<MeData>
								<h2>Account Details - { me.name } { me.lastName }</h2>
								<h3>Email: { me.email }</h3>
								<h3>Handle: { me.instagramHandle }</h3>
								<h3>Shop: { me.shop }</h3>
								<h3>Price: { formatMoney(me.price) }</h3>
								<h3>Bio: { me.bio }</h3>
							</MeData>
							<Results>
								{ !me.stripeToken && (
									<>
										<p>	&#10060; you are not approved to start taking requests</p>
										<Link href={{
											pathname: '/account',
											query: { id: me.id },
										}}>
												<a className="userLink">
													Click here to start taking requests.
												</a>
										</Link>
									</>
								)}
								{ me.stripeToken && (
									<>
										<p>&#9989; you are approved to start taking requests</p>
									</>
								)}
								{ !me.bankToken && (
									<>
										<p>	&#10060; you are not approved to start recieving payouts</p>
										<Link href={{
											pathname: '/bank',
											query: { id: me.id },
										}}>
												<a className="userLink">
													Click here to start recieving payouts.
												</a>
										</Link>
									</>
								)}
								{ me.bankToken && (
									<>
										<p>&#9989; you are approved to start receiving payouts</p>
									</>
								)}
							</Results>
                <Link href={{
                  pathname: '/settings',
                }}>
                  <a>
                    Settings
                  </a>
                </Link>
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
