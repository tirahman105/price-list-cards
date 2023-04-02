import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, 
          name: 'Home',
          path: '/' 
        },
        { id: 2, 
          name: 'About', 
          path: '/about' 
        },
        { id: 3, 
          name: 'Services', 
          path: '/services' 
        },
        { id: 4, 
          name: 'Blog', 
          path: '/blog' 
        },
        { id: 5, 
          name: 'Contact', 
          path: '/contact' 
        }
      ];
    return (
        <nav className='bg-blue-200'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                    open === true ? 
                        <XMarkIcon className="h-6 w-6 text-blue-700 z-10" /> 
                        : <Bars3Icon className="h-6 w-6 text-blue-700 z-10" />
                    }
                </span>
            
           
            </div>
            <ul className={`md:flex absolute md:static duration-300 p-5 z-0 bg-blue-200 ${open ? 'top-6 p-3' : '-top-60'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route= {route}
                    ></Link> )
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;