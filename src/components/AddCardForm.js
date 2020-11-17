import React, { useState } from "react";

export default function AddCardForm(props) {
  const [task, setTask] = useState("");
  function clicked(e) {
    e.preventDefault();
    props.cardAdded(task);
  }

  return (
    <form onSubmit={clicked}>
      <label>
        Add new card {props.message}
        <input name="task" type="text" value={task} onInput={(e) => setTask(e.target.value)} />
        <button>Save</button>
      </label>
    </form>
  );
}
