import "./Review.css";
import drinkingCoffe from "../../../../images/lady-drinking-coffee.jpeg";
import ellipse from "../../../../images/Ellipse 1.svg";
import playButton from "../../../../images/play 1.svg";

const Review = () => {
    return (
        <section id="review-section">
            <div class="review-section container">
                <div class="review-section_left">
                    <h4>
                        “It was super easy to share my unique concept. I got
                        exactly what I ordered. Great service!”
                    </h4>

                    <h5>Jenny Wilson</h5>
                    <p>St. Celina, Delaware</p>
                </div>
                <div class="review-section_right">
                    <img class="lady" src={drinkingCoffe} alt="" />
                    <div class="play-img">
                        <img src={ellipse} alt="" />
                        <img src={playButton} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Review };
