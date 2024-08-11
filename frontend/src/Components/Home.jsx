import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Homepage } from "./Homepage";
import { showSuccessNotification } from "../utils/notification";
export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    if (token) {
      //console.log("token", token);
      localStorage.setItem("token", token);
      showSuccessNotification("login successfull");
      window.history.replaceState({}, document.title, "/");
      navigate(localStorage.getItem("pathToNavigate"));
      if (!reRender) {
        setReRender(true);
      }
    }
  }, [location.search, navigate, reRender]);

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col centerDiv">
        <div className="h-[8vh] w-full min-h-[72px] max-w-[1235px]">
          <Navbar />
        </div>
        <div className="h-[92vh] w-full overflow-y-scroll max-w-[1235px] shadow-lg">
          <Homepage />
        </div>
      </div>
    </>
  );
};
