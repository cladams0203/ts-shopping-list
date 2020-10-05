import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../utils/types";

export const ListContainer: React.FC = () => {
  const { user } = useSelector((state: AppState) => state.user);
  console.log(user);
  return (
    <>
      <div>
        <h1>{user.username}</h1>
      </div>
    </>
  );
};
