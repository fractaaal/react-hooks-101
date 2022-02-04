import React from "react";
import { DELETE_EVENT } from "../actions";

const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})本当に削除していいですか？`
    );

    if (result) {
      dispatch({ type: DELETE_EVENT, id: id });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
