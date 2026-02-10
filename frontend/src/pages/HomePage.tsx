import React from "react";
import useStore from "../store";
import { IState } from "../model/state";
import { ROLES } from "../model/roles";
import CustomerHomepage from "./CustomerHomepage";

const HomePage: React.FC = () => {
  const user = useStore((state: IState) => state.user);
  const role = user?.role;

  return role === ROLES.USER_ROLE ? (
    <CustomerHomepage />
  ) : (
    <p>Homepage for associations</p>
  );
};

export default HomePage;
