
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import WorkPage from './pages/work/Work.page';
import Header from './components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'




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

          {/* socials */}

          {/* Adding social media links */}
          <div className="w-full h-full flex flex-col mt-8 text-base">
            <h1 className="text-white text-xl">Socials</h1>

            <div className='flex flex-wrap text-neutral-200 gap-x-3 pt-4'>
              <span className='text-neutral-500'>You can find more of my work here</span>

              <a
                href="https://twitter.com/yadav_shimanshu"
                target="_blank"
                rel="noopener noreferrer"
                className='flex flex-center space-x-2 text-neutral-200 cursor-pointer hover:text-t-accent'
              >
                <span>Twitter</span>
                <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
              </a>

              <a
                href="https://www.linkedin.com/in/shimanshu-yadav-146a19191/"
                target="_blank"
                rel="noopener noreferrer"
                className='flex flex-center space-x-2 text-neutral-200 cursor-pointer hover:text-t-accent'
              >
                <span>LinkedIn</span>
                <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
              </a>

              <a
                href="https://github.com/Shimanshu83"
                target="_blank"
                rel="noopener noreferrer"
                className='flex flex-center space-x-2 text-neutral-200 cursor-pointer hover:text-t-accent'
              >
                <span>GitHub</span>
                <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </Router>







  );
}

export default App;
