import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };
  return (
    <div className="">
      <button className="hover:cursor-pointer" onClick={handleLogout}>
        <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};

export default PageLayout;
