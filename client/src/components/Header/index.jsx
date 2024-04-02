import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import '../../App.css'; 

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <img className="ml-2" src = "https://media.istockphoto.com/id/1536191188/photo/web-developers-using-a-computer-together-in-an-office.jpg?s=1024x1024&w=is&k=20&c=orC7hK8qulhp-HEcbb8DyKubBx1yCxBqVFLY7I9ivEk=" style={{ width: '300px', height: '300px'}}/>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Tech Friends
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Meet your new programming pals.
        </p>
       
        <div>
          
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/">
                View Employees
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
