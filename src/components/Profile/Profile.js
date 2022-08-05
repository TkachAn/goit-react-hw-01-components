// const username = username; //имя пользователя
// const tag = tag; //тег в социальной сети без @
// const location = location; //город и страна
// const avatar = avatar; //ссылка на изображение
// const stats = stats; //объект с информацией об активности

import user from '../user.json';

export const Profile = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt={user.username} className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{user.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{user.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

{
  /* 
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>; */
}
