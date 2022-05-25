import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../apis/auth';
import Button from '../../components/shared/Button/Button';
import { RootContext } from '../../contexts/RootContext';
const ProfileScreen = () => {
  const navigate = useNavigate();
  const rootData = useContext(RootContext);
  console.log(rootData.user.email, 'from profile');
  const userEmail = rootData.user.email;

  const logoutUser = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>{userEmail}</p>
      <Button buttonName="Logout" onClick={logoutUser} />
    </div>
  );
};

export default ProfileScreen;
