//import user from '../user.json';
import PropTypes from 'prop-types';
import { ProfileS } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsEl } from './Profile.styled';
export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileS className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats className="stats">
        <StatsEl>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsEl>
        <StatsEl>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsEl>
        <StatsEl>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
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
