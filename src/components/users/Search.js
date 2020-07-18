import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div
      className="container is-fluid has-text-centered"
      style={{ paddingTop: "1rem" }}
    >
      <form onSubmit={onSubmit} className="field is-inline-flex">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          className="input"
          value={text}
          onChange={onChange}
          style={{ marginRight: "1rem" }}
        />
        <input
          type="submit"
          value="Search"
          className="button"
          style={{ marginRight: "1rem" }}
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="button is-info" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
