import React, { useState } from 'react'
import { links } from './Mylinks'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const NavLinks = () => {

    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")

    return (
        <>
            {links.map(link => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5' onClick={() => {
                            heading !== link.name ? setHeading(link.name) : setHeading('');
                            setSubHeading("");
                        }
                        }
                        >
                            {link.name}
                            <span className='text-xl md:mt-1 md:ml-2 inline'>
                                {link.submenu && link.sublinks.length > 0 && (
                                    heading === link.name ? <FaChevronUp size={'0.5em'} /> : <FaChevronDown size={'0.5em'} />
                                )}
                            </span>
                        </h1>

                        {link.submenu && link.sublinks.length > 0 && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 '>

                                        </div>
                                    </div>
                                    <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                                        {link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                                {mysublinks.sublink.map(slink => (
                                                    <li className='text-sm text-gray-600 my-2.5'>
                                                        <a href={slink.link} className='hover:text-red-300'>
                                                            {slink.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/*Mobile */}
                    <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                        {/*Sublinks */}

                        {
                            link.sublinks.map((slinks) => (
                                <div>
                                    <div>
                                        <h1 onClick={() =>
                                            subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                                        } className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'>
                                            {slinks.Head}
                                            <span className='text-xl md:mt-1 md:ml-2 inline'>
                                                {subHeading === slinks.Head ? <FaChevronUp size={'0.5em'} /> : <FaChevronDown size={'0.5em'} />}
                                            </span>
                                        </h1>
                                        <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}>
                                            {slinks.sublink.map(slink => (
                                                <li className='py-3 pl-14'>
                                                    <a href={slink.link} className='hover:text-green-600'>
                                                        {slink.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default NavLinks