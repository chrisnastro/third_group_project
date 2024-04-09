import { Link } from 'react-router-dom';
import DropdownForm from '../Dropdown';
import { useState } from 'react';
import "./Dropdown.css";

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  const [selectedDepartments, setSelectedDepartments] = useState([])

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="employee-list">
        <DropdownForm
          profiles={profiles}
          setSelectedDepartments={setSelectedDepartments} />
      </div>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.filter(profile => {
            if (selectedDepartments === "Select a Department") {
              return false
            }
            if (selectedDepartments === "All Departments") {
              return true
            }
            if (selectedDepartments === profile.department) {
              return true
            }
            return false
          }).map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6" >
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  {profile.title} <br />
                  {profile.department} <br />
                </h4>
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View contact info.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
