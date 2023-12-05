import "./Hero.css";
import circleShape from "../../../../images/shape-1.png";
import heroImg from "../../../../images/hero.png";

const Hero = () => {
    return (
        <section id="hero-section">
            <div class="hero-section container">
                <div class="hero-section_left">
                    <img src={circleShape} alt="" class="circle-shape" />
                    <img src={heroImg} alt="" class="hero-img" />
                </div>
                <div class="hero-section_right">
                    <p class="top-text">QUALITY DESIGN FOR ALL</p>
                    <h1>
                        Bring back the classic <br />
                        look by using Whiter. <br />
                        Easy home delivery!
                    </h1>
                    <p class="p-text">
                        Rediscover the timeless allure of the past as Whiter
                        effortlessly revives the beloved vintage aesthetic.
                    </p>
                    <img class="line" src="./images/Line .png" alt="" />
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </div>
        </section>
    );
};

export { Hero };
