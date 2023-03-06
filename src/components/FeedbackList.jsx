import React from 'react'
import FeedbackItem from './FeedbackItem';



 function FeedbackList({feeddback}) {

  if (!feeddback || feeddback.length === 0) {
    return <p>No feedback yet</p>
  }

return (
  <div className='feeddbacklist'>
    {feeddback.map ((item)=> (<FeedbackItem key={item.id} item={item}/>))}

  </div>
)

 }

export default FeedbackList