import "./Footer.css";
import whiterLogo from "../../../../images/Whiter logo.svg";

const Footer = () => {
    return (
        <section id="footer-section">
            <div class="footer-section container">
                <div class="footer-logo">
                    <img src={whiterLogo} alt="" />
                    <p>
                        We make furniture with love and <br />
                        passions. No doubt, really.
                    </p>
                    <p>© TuranTech Inc.</p>
                </div>
                <div class="contact">
                    <h5>CONTACT</h5>
                    <p class="address">62 Orp St, Seattle, USA</p>
                    <a href="email">sales@furnatur.com</a>
                    <a href="phone:+1 800 726 915273">+1 800 726 915273</a>
                </div>
                <div class="product">
                    <h5>PRODUCT</h5>
                    <a href="Living">Living Room</a>
                    <a href="Bed">Bed Room</a>
                    <a href="Office">Office Room</a>
                </div>

                <div class="company">
                    <h5>OUR COMPANY</h5>
                    <a href="About">About us</a>
                    <a href="Services">Services</a>
                    <a href="Products">Products</a>
                </div>
            </div>
        </section>
    );
};

export { Footer };
