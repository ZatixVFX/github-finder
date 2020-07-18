import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={avatar_url} alt={login} />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        <div className="media-content">
          <p className="title is-4">{login}</p>
          <div className="content">
            <Link to={`/user/${login}`} className="button">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
