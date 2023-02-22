import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import AnchorNavItem from './AnchorNavItem';

type Props = object;

function SideNav(props: Props) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className="absolute top-4 right-4 z-99 md:hidden"
            />
            {nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <AnchorNavItem>
                        <AiOutlineHome size={20} />
                        <span>Home</span>
                    </AnchorNavItem>
                    <AnchorNavItem>
                        <GrProjects size={20} />
                        <span>Work</span>
                    </AnchorNavItem>
                    <AnchorNavItem>
                        <AiOutlineProject size={20} />
                        <span>Projects</span>
                    </AnchorNavItem>
                    <AnchorNavItem>
                        <AiOutlineHome size={20} />
                        <span>Resume</span>
                    </AnchorNavItem>
                    <AnchorNavItem>
                        <AiOutlineHome size={20} />
                        <span>Contact</span>
                    </AnchorNavItem>
                </div>
            ) : (
                <div> </div>
            )}
        </div>
    );
}

export default SideNav;
