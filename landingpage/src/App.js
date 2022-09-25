import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



function App() {
  return (
  <div className="App container">
        <Header/>
        <WelcomePage/>
        <Aboutpage/>
    </div>
  );
}

function Header(){
  return(
    <div className='header'>
      <h1>Sarah So</h1>
    </div>
  )
  
}

function PortfolioCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-80"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chatto Robotto</h3>
          <p>Chat app</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <a href="https://habitmakr.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        /></a>
        <Carousel.Caption>
          <h3>HabitMakr</h3>
          <p>HabitMaking app</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <a href="https://hidden-tundra-11775.herokuapp.com/" target="_blank">
        <img
          className="d-block w-80"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
        </a>
        <Carousel.Caption>
          <h3>MoodTrackr</h3>
          <p>
            MoodTrackr app
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function WelcomePage () {
  return ( 
  
  <div>
    <PortfolioCarousel/>
    <div className="typewriter">
      
    </div>
  </div>  );
}

function Aboutpage(){
  return(<div className='animate__animated animate__fadeIn'>
    <h2 data-testid="heading">About me</h2>
    <img src={require('./images/moodtrack_form.gif')} className="aboutImage"/>
    <p>Es is an AI chatbot powered by OpenAI's GPT3.</p>
    <p>This page was made by Sarah So for her portfolio as part of General Assembly's Software Immersive Course.</p>

    <p>To contact Sarah, you can find her via her <a href="https://www.linkedin.com/in/sarah-so-dev/">LinkedIn</a> or <a href="https://github.com/ssarahs-lab">Github Page</a>.</p>
   
              
  </div>)
}


export default App;
