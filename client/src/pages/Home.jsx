import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from '../utils/queries';
import Auth from '../utils/auth';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  if (Auth.loggedIn()) {
    return (
      <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              
              <ProfileList
                profiles={profiles}
                title="Current Employees"
              />
            </>
          )}
        </div>
      </div>
    </main>
    )
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see the Employee Network. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
};

export default Home;
