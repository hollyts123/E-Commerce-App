"use client";
import navbarStyles from './Navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';

interface navbarProps {
    className?: string;
}

const Navbar: React.FC<navbarProps> = ({ className }) => {
    const [activeIcon, setActiveIcon] = useState<string | null>(null);

    const handleNavbarItemClick = (iconName: string) => {
        setActiveIcon(iconName);
    }

    const getIconSource = (iconName: string) => {
        return activeIcon === iconName ? `/navbar/${iconName}-active.svg` : `/navbar/${iconName}.svg`;
    }

    return (
        <div className={className}>
            <div className={navbarStyles['navbar-container']}>
                <img src={getIconSource('home')} alt='House icon' className={navbarStyles['navbar-icon']} onClick={() => handleNavbarItemClick('home')} />
                <Link href='/'><img src={getIconSource('shop')} alt='Bag icon' className={navbarStyles['navbar-icon']} onClick={() => handleNavbarItemClick('shop')} /></Link>
                <img src={getIconSource('notifications')} alt='Bell icon' className={navbarStyles['navbar-icon']} onClick={() => handleNavbarItemClick('notifications')} />
                <img src={getIconSource('profile')} alt='Profile icon' className={navbarStyles['navbar-icon']} onClick={() => handleNavbarItemClick('profile')} />
            </div>
        </div>
    )
}

export default Navbar;