import "./Features.css";
import heart from "../../../../images/heart 1.png";
import zap from "../../../../images/zap 1.png";
import headphones from "../../../../images/headphones 1.svg";

const Features = () => {
    return (
        <section id="features-section">
            <div class="features-section container">
                <div class="feature">
                    <div class="feature-icon">
                        <div class="ellipse shape-1">
                            <img class="icon" src={heart} alt="heart shape" />
                        </div>
                    </div>
                    <div class="feature-text">
                        <h4 class="heading-6">Best quality</h4>
                        <p class="text-md">
                            Uncompromising excellence <br />
                            delivered in every product <br />
                            and experience
                        </p>
                    </div>
                </div>

                <div class="feature">
                    <div class="feature-icon">
                        <div class="ellipse shape-2">
                            <img class="icon" src={zap} alt="heart shape" />
                        </div>
                    </div>
                    <div class="feature-text">
                        <h4 class="heading-6">Fastest delivery</h4>
                        <p class="text-md">
                            Swift and efficient shipping to <br />
                            bring your order to you promptly.
                        </p>
                    </div>
                </div>

                <div class="feature">
                    <div class="feature-icon">
                        <div class="ellipse shape-3">
                            <img
                                class="icon"
                                src={headphones}
                                alt="heart shape"
                            />
                        </div>
                    </div>
                    <div class="feature-text">
                        <h4 class="heading-6">Great support</h4>
                        <p class="text-md">
                            Exceptional customer service to <br />
                            assist and guide you effectively
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Features };
