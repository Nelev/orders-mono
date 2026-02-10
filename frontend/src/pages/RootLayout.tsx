import { Outlet, useNavigate } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../index.css";
import NavBar from "../components/navbar/NavBar";
import { IState } from "../model/state";
import useStore from "../store";

function RootLayout() {
  const navigator = useNavigate();
  const user = useStore((state: IState) => state.user);

  const handleLoginClick = () => {
    navigator("/Login");
  };

  const handleContactClick = () => {
    (window.top || window).location.assign("mailto:smacchia.mattia@gmail.com");
  };

  return (
    <>
      <Header
        handleLoginClick={handleLoginClick}
        handleContactClick={handleContactClick}
      />
      <div className="container">
        <div className="content">
          {user ? (
            <div className="nav">
              <NavBar />
            </div>
          ) : null}
          <div className="section">
            <Outlet />
          </div>
        </div>
        <div className="footer">
          <Footer
            handleLoginClick={handleLoginClick}
            handleContactClick={handleContactClick}
          />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
