import Card from "../shared/Card";
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
  
 
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='blue'/>
      </button>
      <div className="text-display">{item.text}</div>
    
    </Card>
    
  );
}

export default FeedbackItem;