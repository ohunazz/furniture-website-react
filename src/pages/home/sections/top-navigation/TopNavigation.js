import "./TopNavigation.css";
import logo from "../../../../images/Whiter logo.svg";

const links = [
    { text: "Products", link: "https://facebook.com" },
    { text: "Rooms", link: "https://google.com" },
    { text: "Inspiration", link: "https://facebook.com" },
    { text: "Support", link: "https://google.com" }
];

const TopNavigation = () => {
    return (
        <header id="header ">
            <nav class="navigation container">
                <img class="logo" src={logo} alt="" />
                <ul class="nav_links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <a class="nav_btn" href="">
                    Sign in
                </a>
            </nav>
        </header>
    );
};

export { TopNavigation };
