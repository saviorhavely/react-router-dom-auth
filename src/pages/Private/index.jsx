import { useAuth } from "../../contexts/AuthContext";
function Private() {
  const { user, Logout } = useAuth();

  return (
    <div>
      Olá, {user.email} <br />
      <button
        onClick={() => {
          Logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Private;
