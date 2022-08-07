//import user from '../user.json';
import PropTypes from 'prop-types';
import { ProfileS } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsEl } from './Profile.styled';
import css from './Profile.module.css';
export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileS className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <Stats className={css.stats}>
        <StatsEl>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </StatsEl>
        <StatsEl>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </StatsEl>
        <StatsEl>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </StatsEl>
      </Stats>
    </ProfileS>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }), //.isRequired,
};
