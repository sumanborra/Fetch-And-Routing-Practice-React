// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isSpinner: true}
  componentDidMount() {
    this.getBlogDetails()
  }
  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      author: data.author,
      id: data.id,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updateData, isSpinner: false})
  }

  render() {
    const {blogData, isSpinner} = this.state
    const {author, id, avatarUrl, imageUrl, title, topic, content} = blogData
    console.log(this.props)
    return (isSpinner?(
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ):(
      <div className="container-blog-details">
        <h1 className="title-blog-details">{title}</h1>
        <div className="avatar-author-blog-details-container">
          <img src={avatarUrl} className="avatar-image-blog-details" />
          <p className="author-text-BlogItemDetails">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image-BlogItemDetails" />
        <p className="topic-text-blog-details">{content}</p>
      </div>
    ))
  }
}
export default BlogItemDetails
