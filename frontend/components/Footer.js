import Nav from './Nav';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Cart from './Cart';
import Search from './Search';
import User from './User';


const FooterThing = styled.div`
  display: inline-block;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 30px;
  width: 100%;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 200;
  border-top: 1px solid ${props => props.theme.black};
  background: ${props => props.theme.black};
  a {
    margin-right: 20px;
    margin-left: 20px;
    height: 100%;
    color: white;
    vertical-align: middle;
  }
`;

const Footer = () => (
    	<FooterThing>
    				<Link href="/terms">
    					<a>Terms & Conditions</a>
    				</Link>
            <Link href="/about">
    					<a>About Palazar</a>
    				</Link>
    	</FooterThing>
)
export default Footer;
