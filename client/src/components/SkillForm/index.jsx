// kept for future development

const Profile = ({ profileId }) => {

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        <div key={profileId._id} className="col-12 col-xl-6">
          <div className="card mb-3">
            <h4 className="card-header bg-dark text-light p-2 m-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

