import user from '../user.json';
import PropTypes from 'prop-types';
import { ProfileS } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsEl } from './Profile.styled';
export const Profile = () => {
  return (
    <ProfileS className="profile">
      <div className="description">
        <img src={user.avatar} alt={user.username} className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <Stats className="stats">
        <StatsEl>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </StatsEl>
        <StatsEl>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </StatsEl>
        <StatsEl>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
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
