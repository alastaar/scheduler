import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Cart from './Cart';
import Search from './Search';
import User from './User';
import Signout from './Signout';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Person = styled.h2`
font-family: 'Slabo 27px', serif;
  display: inline-block;
  font-size: 15px;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  z-index: 2;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  letter-spacing: 1px;
`;

const Logo = styled.h1`
font-family: 'Slabo 27px', serif;
	font-size: 4rem;
  background: ${ props => props.theme.black };
	margin-left: 2rem;
	position: relative;
	z-index: 2;
  display: inline-flex;
	a {
		padding: 0.5rem 1rem;
		background: ${ props => props.theme.black };
		color: white;
		text-transform: uppercase;
		text-decoration: none;

	}
	@media ( max-width: 2500px) {
		margin: 0;
	}
  @media ( max-width: 720px) {
    display: inline-block;
    width: 100%;
    height: 130px;
    width: 95%;
    margin: 0 auto;
    a {
      margin: 0 auto;
    }
  }
`;

const LogoSec = styled.div`
font-family: 'Slabo 27px', serif;
  display: inline-block;
  margin-left: auto;
  a,
  button {
    padding: 1rem 3rem;
    display: inline-flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 15px;
    background: none;
    border: 0;
    cursor: pointer;
    color: white;
    font-weight: 800;
    @media (max-width: 700px) {
    }
    &:before {
      content: '';
      width: 2px;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: #47BEE9;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media ( max-width: 720px) {
    margin: 0;
    font-size: 13px;
    width: 100%;
    vertical-align: top;
    h2{
      font-size: 13px;
    }
    a {
      font-size: 13px;
      padding: .5em 2em;
    }
    button {
      font-size: 13px;
    }
  }
`;

const StyledHeader = styled.header`
font-family: 'Slabo 27px', serif;
  .bar {
    border-bottom: 2px solid ${props => props.theme.black};
    background: ${ props => props.theme.black };
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 2500px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <User>
    {({ data: { me } }) => (
    	<StyledHeader>
    		<div className="bar">
    			<Logo>
    				<Link href="/">
    					<a>Palazar</a>
    				</Link>
            <LogoSec>
                { me && me.artist == 'yes' && (
                  <>
                    <Person> Hello, { me.name } </Person>
                    <Link href="/me">
                      <a>Account</a>
                    </Link>

                    <Signout />

                  </>
                )}
                { me && me.artist == 'no' && (
                  <>
                    <Signout />
                  </>
                )}
                { !me && (
                  <>
                    <Link href="/signin">
                      <a className="headerLink">SignIn</a>
                    </Link>`
                  </>
                )}
            </LogoSec>
    			</Logo>
    			<Nav />
    		</div>
        <Cart />
    	</StyledHeader>
    )}
    </User>
)
export default Header;
