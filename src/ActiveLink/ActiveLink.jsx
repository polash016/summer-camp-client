import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
      to={to}
      className={({ isActive }) => (isActive === true ? "bg-danger text-decoration-none me-4 px-2 text-black border-success rounded" : "")}
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;