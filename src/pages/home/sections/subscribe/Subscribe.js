import "./Subscribe.css";
import lock from "../../../../images/lock 1.svg";

const Subscribe = () => {
    return (
        <section id="subscribe-section">
            <div class="subscribe-section container">
                <h4>
                    Subscribe to our <br />
                    newsletter to get updated
                </h4>
                <p class="subscribe-text">
                    Get our latest update on your inbox. With lots of unique
                    blocks, you can easily build a page without coding. Build
                    your next consultancy website within few minutes.
                </p>
                <label for="email"></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="  Enter email address"
                />
                <input
                    type="button"
                    value="SUBSCRIBE"
                    onclick="msg()"
                    id="button"
                />
                <div class="lock">
                    <img src={lock} alt="" />
                    <p>We don’t spam at all, our promise!</p>
                </div>
            </div>
        </section>
    );
};

export { Subscribe };
