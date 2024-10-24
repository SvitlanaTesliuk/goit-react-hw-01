
import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profileContainer)}>
      <div className={clsx(css.wrap)}>
        <img
          className={clsx(css.avatar)}
          src={image}
          alt="User avatar"
          width="100"
        />
        <p className={clsx(css.name)}>{name}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.statsList)}>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.label)}>Followers</span>
          <span className={clsx(css.quantity)}>{stats.followers}</span>
        </li>
        <li  className={clsx(css.statsItem)}>
          <span className={clsx(css.label)}>Views</span>
          <span className={clsx(css.quantity)}>{stats.views}</span>
        </li>
        <li  className={clsx(css.statsItem)}>
          <span className={clsx(css.label)}>Likes</span>
          <span className={clsx(css.quantity)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };