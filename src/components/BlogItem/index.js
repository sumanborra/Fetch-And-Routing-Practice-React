// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, avatarUrl, imageUrl, author, title, topic} = blogList
  return (
    <li className="list-item">
      <Link to={`/blogs/${id}`} className="link-style">
        <div className="list-item-image-text-container">
          <img src={imageUrl} alt={title} className="image-side" />
          <div className="list-item-text-container">
            <p className="topic-text">{topic}</p>
            <h1 className="title-text">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} className="profile-image" />
              <p className="author-text">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
