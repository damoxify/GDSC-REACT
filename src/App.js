import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from './pages/ContactPage'
import AboutIconLink from "./components/AboutIconLink";
import ContactIconLink from "./components/ContactIconLink";


export default function App() {
  const[feedback, setFeedback] = useState(FeedbackData)
  
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?"))
    {
     return setFeedback(feedback.filter((item) => item.id !==id ));
    }
  }

  return (
      <Router>
      <Header/>
      <div className='container'>
      <Routes>
      <Route exact path="/"
          element={
            <>
      <FeedbackForm />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}  />
      </>
          }
          ></Route>
            <Route path="/about" element={<AboutPage/>}>

</Route>

<Route path="/contact" element={<ContactPage/>}>
</Route>

    </Routes>
    <AboutIconLink/>
    <ContactIconLink/>

    </div>
    </Router>
  )

  }