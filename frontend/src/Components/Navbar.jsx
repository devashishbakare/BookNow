import { useRef, useState } from "react";
import { IoSearchOutline, IoArrowBack } from "react-icons/io5";
import { getSearchResult } from "../utils/api";
import { showErrorNotification } from "../utils/notification";
import { useNavigate, useLocation } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const timeoutId = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const token = localStorage.getItem("token");
  const [searchBarClicked, setSearchBarClicked] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const [searchKey, setSearchKey] = useState();
  const [showDropdown, setShowDropDown] = useState(false);

  const handleInput = (event) => {
    let key = event.target.value;
    setSearchKey(key);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fetchResultForSearch(key);
    }, 800);
  };
  const fetchResultForSearch = async (searchFor) => {
    const response = await getSearchResult(searchFor);
    console.log(response);
    if (response.success == true) {
      setSearchResult(response.data);
    } else {
      showErrorNotification("something went wrong, please try again later");
    }
  };

  const closeSearchResult = () => {
    setSearchResult("");
    setSearchKey("");
  };

  const navigateToHotel = (hotelId) => {
    closeSearchResult();
    navigate(`/hotel/${hotelId}`);
  };

  const navigatePage = () => {
    navigate("/signIn", { state: currentPath });
  };

  const signOutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="h-[100%] w-[100%] flex items-center bg-[#003b95]">
        {!searchBarClicked && (
          <>
            {" "}
            <div className="h-full w-[150px] flex-shrink-0  centerDiv gap-2">
              <img
                className="h-[40px] w-[40px] rounded-[50%] object-cover"
                src="http://res.cloudinary.com/djgouef8q/image/upload/v1707109963/p8lfmwymj1fnxoddeaaa.png"
                alt="logoImage"
              />
              <span className="text-[#ffffff]">BookNow</span>
            </div>
          </>
        )}

        <div className="h-full flex-grow flex flex-row-reverse items-center sm:hidden">
          {!searchBarClicked && (
            <>
              <IoSearchOutline
                onClick={() => setSearchBarClicked(true)}
                className="mr-3 text-white text-[1.5rem]"
              />
            </>
          )}

          {searchBarClicked && (
            <>
              <div className="h-full w-full centerDiv flex gap-1">
                <div
                  onClick={() => setSearchBarClicked(false)}
                  className="h-full w-[12%] centerDiv"
                >
                  <IoArrowBack className="text-white text-[1.5rem]" />
                </div>
                <div className=" h-[70%] w-[88%] rounded-[40px] centerDiv bg-white mr-5 relative">
                  <input
                    className="h-[85%] w-[90%] border-none outline-none"
                    type="text"
                    value={searchKey}
                    onChange={handleInput}
                    placeholder="Search for city or hotels"
                  />
                  {searchResult && (
                    <div className="absolute top-[105%] h-auto p-3 w-full flex flex-col z-[999] bg-[white] border-2 border-gray-400 items-center">
                      <div className="h-[50px] w-full flex justify-between items-center mb-1">
                        <span className="addFont ml-2">Search Results</span>
                        <span
                          onClick={() => closeSearchResult()}
                          className="mr-4 text-[blue]"
                        >
                          Close
                        </span>
                      </div>
                      {searchResult.map((result) => (
                        <>
                          <div
                            onClick={() => navigateToHotel(result.id)}
                            key={result.id}
                            className="h-[70px] w-[95%] flex border-2 border-gray-400 rounded-md mb-2"
                          >
                            <span className="h-full w-[70px] flex-shink-0">
                              <img
                                src={result.image}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </span>
                            <span className="h-full flex-grow flex items-center addFont pl-3">
                              {result.hotelName}
                            </span>
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="hidden sm:flex h-full flex-grow items-center">
          <div className="h-full w-full centerDiv flex gap-1">
            <div className=" h-[70%] w-[88%] rounded-[40px] centerDiv bg-white mr-5 relative">
              <input
                className="h-[85%] w-[90%] border-none outline-none"
                type="text"
                value={searchKey}
                onChange={handleInput}
                placeholder="Search for city or hotels"
              />
              {searchResult && (
                <div className="absolute top-[105%] h-auto p-3 w-full flex flex-col z-[999] bg-[white] border-2 border-gray-400 items-center">
                  <div className="h-[50px] w-full flex justify-between items-center mb-1">
                    <span className="addFont ml-2">Search Results</span>
                    <span
                      onClick={() => closeSearchResult()}
                      className="mr-4 text-[blue]"
                    >
                      Close
                    </span>
                  </div>
                  {searchResult.map((result) => (
                    <>
                      <div
                        onClick={() => navigateToHotel(result.id)}
                        key={result.id}
                        className="h-[70px] w-[95%] flex border-2 border-gray-400 rounded-md mb-2"
                      >
                        <span className="h-full w-[70px] flex-shink-0">
                          <img
                            src={result.image}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <span className="h-full flex-grow flex items-center addFont pl-3">
                          {result.hotelName}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {!searchBarClicked && token == null ? (
          <>
            <div
              onClick={() => navigatePage()}
              className="h-full w-[80px] flex-shrink-0 centerDiv text-[1.1rem] text-[#ffffff] pr-3 cursor-pointer"
            >
              Sign-In
            </div>
          </>
        ) : (
          <>
            <div
              // onClick={() => signOutUser()}
              className="h-full w-[70px] relative flex-shrink-0 centerDiv text-[1.1rem] text-[#ffffff] pr-3 md:w-[90px]"
            >
              <div
                onClick={() => setShowDropDown(true)}
                className="h-[45px] w-[45px] rounded-[50%]"
              >
                <img
                  src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                  alt="userImage"
                  className="h-full w-full object-cover rounded-[50%]"
                />
              </div>
              {showDropdown && (
                <div className="absolute top-[110%] right-2 h-auto w-[130px] flex flex-col z-50 bg-[#fbfbfb] text-black shadow-md rounded-md">
                  <span
                    onClick={() => navigate(`/profile`)}
                    className="h-[50px] w-full flex items-center pl-[20px] font-light border-b-[1px] border-[#eaeaea] cursor-pointer"
                  >
                    Profile
                  </span>
                  <span
                    onClick={signOutUser}
                    className="h-[50px] w-full flex items-center pl-[20px] font-light border-b-[1px] border-[#eaeaea] cursor-pointer"
                  >
                    Sign Out
                  </span>
                  <span
                    onClick={() => setShowDropDown(false)}
                    className="h-[50px] w-full flex items-center pl-[20px] font-light border-b-[1px] border-[#eaeaea] cursor-pointer"
                  >
                    Close
                  </span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
