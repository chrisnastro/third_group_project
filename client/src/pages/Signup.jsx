import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';
import SignupDropdown from '../components/SignupDropdown';
import PublicProfileList from '../components/PublicProfileList';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    title: '',
    department: '',
    email: '',
    password: '',
  });

  const [signupSuccess, setSignupSuccess] = useState(false);
  const [titles, setTitles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [addProfile, { error }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      if (data.addProfile.token) {
        Auth.login(data.addProfile.token); 
        setSignupSuccess(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <PublicProfileList setTitles={setTitles} setDepartments={setDepartments} />
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
            <div className="card-body">
              {signupSuccess ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <SignupDropdown label="Title" options={titles} value={formState.title} onChange={handleChange} />
                  <SignupDropdown label="Department" options={departments} value={formState.department} onChange={handleChange} />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main >
    </>
  );
};

export default Signup;
