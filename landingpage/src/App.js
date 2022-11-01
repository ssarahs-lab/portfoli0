import './App.css';




function App() {
  return (
  <div className="App container">
        <Header/>
        <Portfolio/>
       
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

function Portfolio(){
  return(
    <div>
      <img
          className="d-block w-80"
          src={require('./images/chattoroboto.gif')}
          alt="First slide"
        />
        <img
          className="d-block w-80"
          src={require('./images/habitmakr_landing.gif')}
          alt="Second slide"
        />
        <img
          className="d-block w-80"
          src={require('./images/moodtracker_graph.gif')}
          alt="Third slide"
        />
         <img
          className="d-block w-80"
          src={require('./images/wordlescreenshot.png')}
          alt="Second slide"
        />
    </div>
  )
}



function WelcomePage () {
  return ( 
  
  <div>
   
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
