import './index.css'

const ListItem = props => {
  const {imagesList} = props
  const {thumbnailUrl, id} = imagesList
  return (
    <>
      <ul>
        <li className="image-container">
          <button type="button">
            <img alt="thumbnail" className="image-item" src={thumbnailUrl} />
          </button>
        </li>
      </ul>
    </>
  )
}
export default ListItem
