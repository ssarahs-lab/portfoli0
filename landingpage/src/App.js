import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndividualIntervalsExample from './components/carousel';

function App() {
  return (
    <div className="App container">
  
 
     
    <BrowserRouter>
    <header>
        <ul className='ul-display'>
          <li><a href="/home">Home</a></li>
          <li><a href="/aboutpage">About</a></li>
          
        </ul>
      </header>

 

    <Routes>
        
    <Route path="/home" element={<WelcomePage/>}/>
        <Route path="/aboutpage" element={<Aboutpage/>}/>
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
                <img src={require('./images/habitmakr_landing.gif')}></img>
              </div>
            }
          />


      </Routes>  
    </BrowserRouter>
  
  </div>
     
  );
}

function WelcomePage () {
  return ( <div>

<div className="typewriter">

  <IndividualIntervalsExample/>
  <h1>Sarah So</h1>
</div>
  </div>  );
}

function Aboutpage(){
  return(<div className='animate__animated animate__fadeIn'>
    <h2 data-testid="heading">About this page</h2>
    <img src={require('./images/moodtrack_form.gif')} className="aboutImage"/>
    <p>Es is an AI chatbot powered by OpenAI's GPT3.</p>
    <p>This page was made by Sarah So for her portfolio as part of General Assembly's Software Immersive Course.</p>

    <p>To contact Sarah, you can find her via her <a href="https://www.linkedin.com/in/sarah-so-dev/">LinkedIn</a> or <a href="https://github.com/ssarahs-lab">Github Page</a>.</p>
   
              
  </div>)
}


export default App;
