
# React Portfolio Website with Advanced Animations

This is a portfolio website built using React and featuring advanced animations. The website showcases various pages such as Home, About, and Contact, with each page incorporating different animations and interactive elements.

## Table of Contents

- [Installation](#installation)
- [Global Styles](#global-styles)
- [Routes](#routes)
- [Left Sidebar](#left-sidebar)
- [Site Layout](#site-layout)
- [Home Page](#home-page)
- [SVG Logo Animation](#svg-logo-animation)
- [About Page](#about-page)
- [Page Loader](#page-loader)
- [Contact Page](#contact-page)
- [Learned Technologies](#learned-technologies)
- [Helpful Resources](#helpful-resources)

## Installation

To run this React portfolio website locally, follow these steps:

1. Clone the repository to your local machine 

   Or you can create your own React app
   ```
   npx create-react-app react-portfolio
   cd react-portfolio
   ```
2. Open the project folder in your preferred code editor.
   ```
   npm install
   ```

3. Install the required dependencies by running the following command:
   ```
   npm i @emailjs/browser
   npm i @react-google-maps/api 
   npm i @fortawesome/free-brands-svg-icons
   npm i @fortawesome/free-solid-svg-icons
   npm i @fortawesome/react-fontawesome
   npm i animate.css
   npm i gsap-trial
   npm i loaders.css
   npm i react-loaders
   npm i react-router-dom
   npm i sass
   ```
4. Start the development server using the following command:
   ```
   npm start
   ```
5. Open your web browser and navigate to `http://localhost:3000` to view the website.

## Global Styles

In this project, global styles are defined using SCSS (Sass) instead of CSS to provide a more flexible and modular approach to styling. SCSS allows for variables, mixins, and nesting, making it easier to manage and organize stylesheets.
- Upload Assets folder to your project
- Update the name of `App.css` to `App.scss` 
    ```
    $primary-color: #ffd700;

    @import 'animate.css';

    @font-face {
      font-family: 'Helvetica Neue';
      src: url('./assets/fonts/helvetica-neu.ttf') format('ttf');
    }

    @font-face {
      font-family: 'La Belle Aurore';
      src: url('./assets/fonts/LaBelleAurore.woff2') format('woff2');
    }

    @font-face {
      font-family: 'CoolveticaRg';
      src: url('./assets/fonts/CoolveticaRg-Regular.woff2') format('woff2');
    }

    input,
    textarea {
      font-family: 'Helvetica Neue' ;
    }
    ```

- Update `index.css`
    ```
    html {
      font-size: 62.5%;
    }

    body {
      margin: 0;
      font-family: 300 11px/1.4 'Helvetica Neue', 'sans-serif';
      color: #444;
      background: #022c43;
      overflow: hidden;
      display: block;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  ```


## Routes

The website utilizes React Router to implement page routing. Different routes are defined for each page, enabling seamless navigation between different sections of the portfolio.

It provides to us use routes in our application:

`index.js` 
```
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
```

  `App.js` 
```
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
```

## Left Sidebar

The left sidebar is an essential component of the website layout. It provides easy access to different sections and acts as a navigation menu for the portfolio pages.

I used `@fortawesome` in `index.js` you can see below:
```
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import  LogoS from '../../assets/images/logo-i.png' 
import  LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faSkype } from '@fortawesome/free-brands-svg-icons'
```

## Site Layout

The overall layout of the website is built using responsive design principles. The site adjusts its appearance based on the device screen size, ensuring optimal user experience across different devices.
```
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
```

## Home Page

The Home page serves as the landing page for the portfolio website. It includes engaging content and attractive animations to capture the visitor's attention.

The main feature is an `AnimatedLetters` component to implement hover animations:
```
  { letterClass, strArray, idx }

  {strArray.map((char, i) => (
    <span key={char + i} className={`${letterClass} _${i + idx}`}>
      {char}
    </span>
  ))}
```
I used the following UseState and useEffect methods:
```

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [ 'v', 'a', 'n']
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);      
      return () => clearTimeout(timeout);
    }, []);

    return (
      ...
      <AnimatedLetters letterClass={letterClass} 
                  strArray={jobArray}
                  idx={18}
                  />   
      ...
    )
```

## SVG Logo Animation

The website features a captivating SVG logo animation created using GSAP (GreenSock Animation Platform) and React. This animation adds a visually appealing element to the website's branding.

There is an outline of the SVG logo:
```
  <svg
    width="745.333pt"
    height="1196pt"
    version="1.0"
    viewBox="0 0 559 897"
    xmlns="http://www.w3.org/2000/svg"
  >
  <g
    className="svg-container"
    fill="none"
  >
  <motion.path
    d="................................"
    variants={pathVariants}
    initial="hidden"
    animate="visible"
  />
  </g>
  </svg>
```

## About Page

The About page provides detailed information about the website owner or the individual behind the portfolio. It may include personal background, skills, experience, and other relevant details.

Also I implemented the cubeSpinner feature in `index.scss` of About component:
```
 ...
 .face1 {
      transform: translateZ(100px);
      color: #dd0031;
    }
    .face2 {
      transform: rotateY(90deg) translateZ(100px);
      color: #f06529;
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
      color: #28a4d9;
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
      color: #5ed4f4;
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
      color: #efd81d;
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(100px);
      color: #ec4d28;
  ...
```

## Page Loader

A page loader animation is implemented to enhance the user experience during page transitions. React-Loaders library is used to add a loading animation, creating a smooth transition between different pages.

You need to import to the `App.scss`: 
```
@import '~loaders.css/src/animations/square-spin.scss'
.loader-active {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  animation: fadeOut 1s 1s;
  animation-fill-mode: forwards;
}
```
```
  <Loader type="square-spin" />
```

## Contact Page

The Contact page allows visitors to get in touch with the website owner. It includes a contact form implemented in React using EmailJS, enabling users to send messages directly from the website.

- Below I show how to create the contact form components, Contact.js:
```
  import React, { useRef } from 'react';
  import emailjs from '@emailjs/browser';

  export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  };
  ```
- Example of how to use the google maps service:
```
  import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
  import { useMemo } from "react";
  import "./App.css";

  const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
  };
```

## Learned Technologies

Throughout the development of this project, the following technologies and techniques were learned:

- Drawing SVG animation using GSAP and React.
- Animating letters on hover using Animate.css and React.
- Adding page loading animation using React-Loaders.
- Implementing Pacman animation in React.
- Creating custom 3D CSS animations.
- Implementing font icons in React.
- Creating and implementing a contact form in React using EmailJS.
- Adding maps to a website in React using the Google Maps JavaScript API.

## Helpful Resources

Here are some resources that were instrumental in creating this portfolio website:

- [EmailJS Documentation: ReactJS Examples](https://www.emailjs.com/docs/examples/reactjs/)
- [How to load Maps JavaScript API in React](https://www.youtube.com/watch?v=9e-5QHpadi0)
- [Article: Implementing Loaders in React](https://javascript.plainenglish.io/implementing-loaders-in-react-a5e41cd04f0b)
- [Potrace: Transform Bitmap Images into Scalable Vector Graphics](https://potrace.sourceforge.net/#frequently)
- [React SVGR: Convert SVG to React Components](https://react-svgr.com/playground/)
- [SCSS/Sass Tutorial for Beginners - CSS With Superpowers](https://www.youtube.com/watch?v=_a5j7KoflTs)
- [Text Animation | Type Writer Effect in React 2022](https://www.youtube.com/watch?v=0fzeNW00FWI)

These resources provided valuable insights, tutorials, and code examples that helped in the development of this project. Make sure to check them out for further guidance.

**Note:** If you encounter any issues or have any suggestions, please feel free to reach out.
