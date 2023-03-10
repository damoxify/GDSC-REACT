import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";



function ContactPage() {
  return (
    <Card>
     <div className="contact">
        <h1>Contact</h1>
        <p><FaTwitter/>:</p>
        <p><FaFacebook/>:</p>
        <p><FaGithub/>:</p>
        <p><FaPhone/>:</p>


      
        <Link to="/">Back to Home</Link>
        <p>        
        </p>
     </div>
    </Card>
  )
}

export default ContactPage