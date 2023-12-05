import "./Explore.css";
import wifeHusband from "../../../../images/wife-husband.jpeg";
import shape2 from "../../../../images/shape-2.svg";
import line from "../../../../images/Line .png";

const Explore = () => {
    return (
        <section id="explore-section">
            <div class="explore-section container">
                <div class="explore-section_left">
                    <img class="couple" src={wifeHusband} alt="" />
                    <img class="explore-shape" src={shape2} alt="" />
                </div>
                <div class="explore-section_right">
                    <h3>
                        Spend your happy <br />
                        time with full comfort.
                    </h3>
                    <p>
                        Embrace blissful comfort: Revel in delightful moments,
                        <br />
                        surrounded by unmatched tranquility and exquisite <br />
                        relaxation.
                    </p>
                    <img class="line" src={line} alt="" />
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </div>
        </section>
    );
};

export { Explore };
