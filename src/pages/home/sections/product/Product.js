import "./Product.css";
import arrowRight2 from "../../../../images/arrow-right 2.svg";
import arrowRight1 from "../../../../images/arrow-right 1.svg";
import chairLight from "../../../../images/chair-light.jpeg";
import chairDark from "../../../../images/chair-dark.jpeg";
import couch from "../../../../images/couch.jpeg";

const Product = () => {
    return (
        <section id="product-section">
            <div class="product-section container">
                <div class="product-top">
                    <h3 class="product-heading">
                        Explore our exclusive design.
                    </h3>
                    <div class="sign">
                        <img src={arrowRight2} class="sign-1" alt="" />
                        <img src={arrowRight1} class="sign-2" alt="" />
                    </div>
                </div>

                <div class="product-buttom">
                    <div class="product-img">
                        <img src={chairLight} alt="" />
                    </div>
                    <div class="product-img">
                        <img src={chairDark} alt="" />
                    </div>
                    <div class="product-img product-last">
                        <img src={couch} alt="" />
                        <div class="price">
                            <span>$271</span>
                            <p>White Phonix</p>
                            <img src={arrowRight1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Product };
