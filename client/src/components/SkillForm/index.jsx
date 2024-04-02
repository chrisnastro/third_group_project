import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SKILL } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Profile = ({ profileId }) => {
  // if (!profiles.length) {
  //   return <h3>No Info Yet</h3>;
  // }

  return (
    <div>
      {/* <h3 className="text-primary">{title}</h3> */}
      <div className="flex-row justify-space-between my-4">

            <div key={profileId._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">

                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.skills ? profile.skills.length : 0}{' '}
                    endorsed skill
                    {profile.skills && profile.skills.length === 1 ? '' : 's'}
                  </span> */}
                </h4>

              </div>
            </div>
          
      </div>
    </div>
  );
};

export default Profile;

