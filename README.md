# React Project Tutorial – Build a Portfolio Website w/ Advanced Animations

### Create React App
`npx create-react-app react-portfolio`\
`cd react-portfolio`

### Install dependencies
`npm i @emailjs/browser`\
`npm i @fortawesome/free-brands-svg-icons`\
`npm i @fortawesome/free-solid-svg-icons`\
`npm i @fortawesome/react-fontawesome`\
`npm i animate.css`\
`npm i gsap-trial`\
`npm i loaders.css`\
`npm i react-leaflet`\
`npm i react-loaders`\
`npm i react-router-dom`\
`npm i sass`\

Add `.prettierrc` to your root folder with code:
```
{
    "trailingComma": "es5",
    "tabwidth": 2,
    "semi": false,
    "singleQuote": true
}
```
Update the name of `App.css` to `App.scss` \
Don't forget update import row in `App.js`.\

Upload Assets folder to your project\
Update `App.scss`

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

Update `index.css`
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
Update `index.js` with
```
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
```
It provides to us use routes in our application.

Update `App.js` 
```
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
```

Then create a path `components/Layout` in `src` with `index.js and index.scss`

Add to `index.js`
```
import './index.scss';

const Layout = () => {
    return <>Hello</>
}

export default Layout
```

Don't forget to add `import Layout from './components/Layout';`

Create a path `components/Sidebar` with `index.js and index.scss`

`index.js`:
```
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />  
            <img className='sub-logo' src={LogoSubtitle} alt="Ivan" />   
        </Link>
        <navLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </navLink>
        <navLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </navLink>

        <navLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </navLink>
    </div>
)

export default Sidebar
```
paused on 40:50