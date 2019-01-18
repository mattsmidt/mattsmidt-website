import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

// Remove these eventually
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
      alt: 'alt text'
    }}
    title={{
      text: 'Matt Smidt'
    }}
    description={{
      text: 'My website is currently under construction.',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://www.linkedin.com/in/matthew-smidt/',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:smidtm@myumanitoba.ca',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}
  />
);


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <NavBar />
//           <Route name="home" exact path="/" component={HomePage} />
//           <Footer />
//         </div>
//       </Router>
//     )
//   }
// }

export default App;
