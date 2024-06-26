import React from 'react'
import Project from '../../components/project/Project';
import Skill from '../../components/skills/Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function HomePage() {
    return (

        <>

            <Project></Project>
            

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


        </>



    )
}

export default HomePage