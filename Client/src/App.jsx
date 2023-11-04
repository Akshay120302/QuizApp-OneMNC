import First from './components/First.jsx'
import Second from './components/Second.jsx';
import Third from './components/Third.jsx'
import Fifth from './components/Fifth.jsx';
import CreateQuiz from './components/CreateQuiz.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  
    <Router>
      <Routes>
        <Route path='/quiz' element={<First/>} />
        <Route path='/LeaderBoard' element={<Second/>} />
        <Route path='/scoreboard' element={<Third/>} />
        <Route path='/' element={<Fifth/>} />
        <Route path='/CreateQuiz' element={<CreateQuiz/>} />
      </Routes>
    </Router>
    
    
  );
}

export default App;

