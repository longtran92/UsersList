import React from "react";
import "./style.scss";
import Button from "../../utility/Button";

const UserItem = (props) => {
  const { userNumber, userEmail, userName, userAge } = props;
  return (
    <div className="table-row">
      <div className="table-cell">{userNumber}</div>
      <div className="table-cell">{userEmail}</div>
      <div className="table-cell">{userName}</div>
      <div className="table-cell">{userAge}</div>
      <div className="table-cell">
        <Button text="Add" />
      </div>
      <div className="table-cell">
        <Button text="Duplicate" />
      </div>
    </div>
  );
};

export default UserItem;
