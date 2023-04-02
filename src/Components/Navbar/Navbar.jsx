import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, 
          name: "Home",
          path: "/" 
        },
        { id: 2, 
          name: "About", 
          path: "/about" 
        },
        { id: 3, 
          name: "Services", 
          path: "/services" 
        },
        { id: 4, 
          name: "Blog", 
          path: "/blog" 
        },
        { id: 5, 
          name: "Contact", 
          path: "/contact" 
        }
      ];
    return (
        <nab>
            <ul className='md: flex mx-4'>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route= {route}
                    ></Link> )
                }
            </ul>
            
        </nab>
    );
};

export default Navbar;