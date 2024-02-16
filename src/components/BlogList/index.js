// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isSpinner: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      topic: each.topic,
    }))
    this.setState({blogList: updatedData, isSpinner: false})
  }

  render() {
    const {blogList, isSpinner} = this.state
    return isSpinner ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <ul className="list-container">
        {blogList.map(each => (
          <BlogItem blogList={each} key={each.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
