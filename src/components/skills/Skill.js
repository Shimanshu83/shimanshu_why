import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDatabase } from '@fortawesome/free-solid-svg-icons'
import { 
    faJs, 
    faPython, 
    faReact, 
    faAngular, 
    faCss3Alt, 
    faHtml5, 
    faSass, 
    faNodeJs, 
    faDocker, 
    faAws ,
} from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

function Skill() {
    return (
        <div className='w-full h-full mt-8'>
            <h1 className="text-white text-xl">My Skills</h1>

            {/* this is for subsection */}
            <div className="ml-4">

                {/* languague subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Languages</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faJs} />
                            <span className="text-base">JavaScript</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faJs} />
                            <span className="text-base">TypeScript</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faLeaf} />
                            <span className="text-base">Golang</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faPython} />
                            <span className="text-base">Python</span>
                        </div>
                    </div>
                </div>

                {/* frontend subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Frontend</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faReact} />
                            <span className="text-base">REACT</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faAngular} />
                            <span className="text-base">ANGULAR</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faSass} />
                            <span className="text-base">SCSS</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faHtml5} />
                            <span className="text-base">HTML</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faCss3Alt} />
                            <span className="text-base">CSS</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            {/* <FontAwesomeIcon width={20} height={20} icon={faArrowUpRightFromSquare} /> */}
                            <span className="text-base">Tailwind</span>
                        </div>
                    </div>
                </div>

                {/* Backend subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Backend</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faLeaf} />
                            <span className="text-base">Fiber (Golang)</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faNodeJs} />
                            <span className="text-base">Node js</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faNodeJs} />
                            <span className="text-base">Express Js</span>
                        </div>
                    </div>
                </div>

                {/* Database subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Database</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">MYsql</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">Oracle db</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">MongoDB</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">Redis</span>
                        </div>
                    </div>
                </div>

                {/* Devops subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Devops</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faAws} />
                            <span className="text-base">Aws</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDocker} />
                            <span className="text-base">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill




