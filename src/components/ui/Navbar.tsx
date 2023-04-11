import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  const { token, setToken } = props || {};

  const logoutUser = () => {
    setToken && setToken(null);
    localStorage.clear();
  };

  return (
    <div className="navbar">
      <div className="logo">
        {token && (
          <div>
            <Link to="/">FriendBook</Link>
          </div>
        )}
        {!token && <>FriendBook</>}
      </div>
      {token && (
        <div className="logout">
          <Link to="/" onClick={() => logoutUser()}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
