
import './App.css';
import Header from './components/Header/Header';
import Project from './components/project/Project';
import Work from './components/work/Work';
import Skill from './components/skills/Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="w-screen h-full min-h-screen bg-primary-bg flex ">

      <div className="w-full max-w-[700px] mx-auto px-8 md:p-0  h-full my-16 ">
        <Header></Header>

        <hr className='border-neutral-800 my-8' ></hr>
        <Project></Project>
        <Work></Work>

        <Skill></Skill>

        {/* adding my social media links here for better visibility */}
        <div className="w-full h-full flex flex-col mt-8 text-base"  >
          <h1 className="text-white text-xl" >Socials</h1>

          <div className='flex flex-wrap  text-neutral-200 gap-x-3 pt-4'>

            <span className='text-neutral-500'  > You can find more of my work here </span>

            <div className='flex flex-center   space-x-2 text-neutral-200 cursor-pointer hover:text-t-accent' >
              <span>Twitter </span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </div> 

            <div className='flex flex-center  space-x-2 cursor-pointer hover:text-t-accent' >
              <span>Linkedin</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </div> 
            
            <div className='flex flex-center  space-x-2 cursor-pointer hover:text-t-accent' >
              <span>Github</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </div>



          </div >

        </div>



      </div>

    </div>
  );
}

export default App;
