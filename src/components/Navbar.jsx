import React, { useEffect, useState } from "react";
/* link para navegar a otras partes de la pagina */
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        /* etiqueta semantica "nav de navbar" */
        /* el className es una dynamic template string */
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full  flex justify-between items-center max-w-7xl mx-auto">
                {/* '/' principio de pagina */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive(
                            ""
                        ); /* setActive mantiene el rastro de donde estamos en la pagina,*/
                        window.scrollTo(0, 0); /* scroll al top de la pagina */
                    }}
                >
                    {/* No use tailwind ya que todavia no se por que no funcionaba. Era className = "w-0-9 h-9 object-contain" */}
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Fabian <span className="sm:block hidden">| Web Developer</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${active === Link.title
                                ? "text-white"
                                : "text-secondary" //si esta activo: blanco, si no: gris
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}> {Link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Hamburuesa y X para cerrar */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`${active === Link.title
                                        ? "text-white"
                                        : "text-secondary" //si esta activo: blanco, si no: gris
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(Link.title);
                                    }}
                                >
                                    <a href={`#${Link.id}`}> {Link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;