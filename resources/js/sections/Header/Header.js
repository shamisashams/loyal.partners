import React, { useState } from "react";
import Logo from "/img/header/logo.svg";
import { FB, Globe, IN, YT } from "../../components/Icons/Icons";
import "./Header.css";
import { usePage } from "@inertiajs/inertia-react";
import { Route } from "react-router-dom";
import { Link } from '@inertiajs/inertia-react'

const Header = () => {
    const { locales, currentLocale, locale_urls } = usePage().props;
    const [scrolled, setScrolled] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });
    const navbar = [
        {
            id: "#technology",
            name: __("insights"),
        },
        {
            id: "#services",
            name: __("services"),
        },
        {
            id: "#special_offers",
            name: __("special_offers"),
        },
        {
            id: "#about_us",
            name: __("about_us"),
        },
        {
            id: "#team",
            name: __("career"),
        },
        {
            id: "#footer",
            name: __("contacts"),
        },
    ];
    return (
        <div className={`header ${scrolled ? "short" : ""}`}>
            <div className="wrapper flex">
                <Link href={route("client.home.index")} className="logo">
                    <img src="/img/header/logo.svg" alt="" />
                </Link>
                <div
                    className={
                        mobileMenu
                            ? "mobile_menu flex open"
                            : "mobile_menu flex"
                    }
                >
                    <div className="navbar">
                        {navbar.map((nav, i) => {
                            return (
                                <a
                                    href={nav.id}
                                    className="nav_link bold"
                                    key={i}
                                >
                                    {nav.name}
                                </a>
                            );
                        })}
                    </div>
                    <div className="languages">
                        <div className="on bold">
                            <Globe color="#4D4E4E" />
                            {Object.keys(locales).map((name, index) => {
                                if (locales[name] === currentLocale) {
                                    return <div key={index}>{name}</div>;
                                }
                            })}
                        </div>
                        <ul className="drop bold">
                            {Object.keys(locales).map((name, index) => {
                                if (locales[name] !== currentLocale) {
                                    return (
                                        <li>
                                            <a
                                                href={locale_urls[name]}
                                                key={name + "locale"}
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                    <div className="social_links flex centered">
                        <a href="#">
                            <div className="sl flex centered">
                                <FB color="#1F7FA0" />
                            </div>
                        </a>
                        <a href="#">
                            <div className="sl flex centered">
                                <IN color="#1F7FA0" />
                            </div>
                        </a>
                        <a href="#">
                            <div className="sl flex centered">
                                <YT color="#1F7FA0" />
                            </div>
                        </a>
                    </div>
                </div>
                <div
                    className={mobileMenu ? "menu_btn clicked" : "menu_btn"}
                    onClick={() => toggleMenu()}
                >
                    <div className="span"></div>
                    <div className="span"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
