import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';
import Controller from 

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    title: '',
    department: '',
    email: '',
    password: '',
  });
  // Added state for department ID
  const [dept_id, setDeptId] = useState('');

  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // Update formState on input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  // Options for department dropdown
  const options = [
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Human Resources", label: "Human Resources" },
  ];

  // Handler for department selection
  const changeHandler = (event) => {
    setDeptId(event.target.value);
    // Also update formState.department if necessary
    setFormState({ ...formState, department: event.target.value });
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.log()
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
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
                <input
                  className="form-input"
                  placeholder="Your title"
                  name="title"
                  type="text"
                  value={formState.title}
                  onChange={handleChange}
                />
                <Controller
                  name="department"
                  control={control}
                  rules={{ required: 'Department is required.' }}
                  render={({ field, fieldState }) => (
                    <Dropdown
                      id={field.department}
                      value={field.value}
                      optionLabel="name"
                      placeholder="Select a Department"
                      options={options}
                      focusInputRef={field.ref}
                      onChange={(e) => field.onChange(e.value)}
                      className={classNames({ 'p-invalid': fieldState.error })}
                    />
                  )}
                />

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
    </main>
  );
};

export default Signup;
