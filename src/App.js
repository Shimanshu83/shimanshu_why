
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import WorkPage from './pages/work/Work.page';
import Header from './components/Header/Header';



function App() {
  return (


    <Router>
      <div className="w-screen h-full min-h-screen bg-primary-bg flex ">

        <div className="w-full max-w-[700px] mx-auto px-8 md:p-0  h-full my-16 ">


          <Header></Header>
          <hr className='border-neutral-800 my-8' ></hr>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </div>
      </div>

    </Router>







  );
}

export default App;
