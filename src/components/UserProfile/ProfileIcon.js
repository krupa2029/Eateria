import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';


const ProfileIcon = () => {
  return (<NavLink to="/profile">
      <FaUserCircle size={28} color='white'/>
  
      </NavLink>);
};

export default ProfileIcon;
