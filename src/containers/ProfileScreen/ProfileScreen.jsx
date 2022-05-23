import { useContext } from 'react';
import { RootContext } from '../../contexts/RootContext';
const Profile = () => {
  const rootData = useContext(RootContext);
  console.log(rootData.user.user.email, 'from profile');
  const userEmail = rootData.user.user.email;
  return (
    <div>
      <p>{userEmail}</p>
    </div>
  );
};

export default Profile;
