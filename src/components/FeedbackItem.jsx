import Card from "../shared/Card";
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {

  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=> handleDelete(item.id)}>
        <FaTimes color='blue'/>
      </button>
      <div className="text-display">{item.text}</div>
    
    </Card>
  )
  
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired
 }

export default FeedbackItem;