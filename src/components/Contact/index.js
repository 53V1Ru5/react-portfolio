import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect (() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timeout);
      }, [])

     
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Message failed to be sent, please try again!')
          }
          )
    };
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
      const center = useMemo(() => ({ lat: 40.72036833120583, lng: -74.05195054378083 }), []);
     
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                      idx={15}
                    />
                </h1>
                <p>
                  I am interested in freelance opportunities - especially on ambitious
                  or large projects. However, if you have any other requests or
                  questions, don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li  className='half'>
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                required 
                                />
                            </li>
                            <li  className='half'>
                                <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                required 
                                />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject"
                                required 
                                />
                            </li>
                            <li>
                                <textarea
                                placeholder="Message"
                                name="message"
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
             <div className="info-map">
          Ivan Kladin,
          <br />

          Jersey City, NJ, 07302 <br />
          <br />
          <span>ivankladin@gmail.com</span>
        </div>
                <div className="map-wrap">
                    {!isLoaded ? (
                     <h1>Loading...</h1>
                     ) : (
                    <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                    >
                    <MarkerF key="marker" position={center} />
                    </GoogleMap> 
                    )}
                </div>
            
        </div>
        <Loader type='square-spin' />
        </>
    )
}

export default Contact