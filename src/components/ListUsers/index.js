import React from "react";
import "./style.scss";

import UserItem from "./UserItem";

const ListUsers = (props) => {
  const { userInfo } = props;
  return (
    <div className="user-table">
      <div className="table-row">
        <div className="table-cell"></div>
        <div className="table-cell column-title">Email</div>
        <div className="table-cell column-title">Username</div>
        <div className="table-cell column-title">Age</div>
        <div className="table-cell"></div>
        <div className="table-cell"></div>
      </div>
    </div>
  );
};

export default ListUsers;
