import Link from 'next/link';
import User from './User';

const UserDetails = () => (
  <User>
    {({ data: { me } }) => (
      <>
        <h2>Account Details</h2>
        { me && (
          <>
            <h2>{ me.name }</h2>
            <h2>Email: { me.email }</h2>
            <h2> @ { me.instagramHandle }</h2>
            <h2> Shop: { me.shop }</h2>
            <h2> Price: { me.price }</h2>
            <h2> Bio: { me.bio }</h2>
            <Link href={{
              pathname: '/update',
              query: { id: me.id },
            }}>
              <a>
                Update Account
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
);

export default UserDetails;
