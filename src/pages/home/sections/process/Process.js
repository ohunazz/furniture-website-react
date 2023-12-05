import "./Process.css";
import line from "../../../../images/Line .png";

const Process = () => {
    return (
        <section id="process-section">
            <div class="process-section container">
                <h3>OUR WORKING PROCESS</h3>
                <div class="first-lane">
                    <span>01.</span>
                    <h4>
                        Discuss the <br />
                        concept with us.
                    </h4>
                    <p>
                        Engage in an insightful conversation with our team to
                        explore your project's vision, goals, and desired
                        outcomes
                    </p>
                    <a href="">
                        <img src={line} alt="" class="orange-line" />
                        LEARN MORE
                    </a>
                </div>
                <div class="second-lane">
                    <span>02.</span>
                    <h4>
                        Confirm the
                        <br />
                        provided design.
                    </h4>
                    <p>
                        Once you provide us with the design you envision, our
                        experienced team will meticulously review and validate
                        every aspect.
                    </p>
                    <a href="">
                        <img src={line} alt="" class="orange-line" />
                        LEARN MORE
                    </a>
                </div>
                <div class="third-lane">
                    <span>03.</span>
                    <h4>
                        Get delivered the <br />
                        furniture on time.
                    </h4>
                    <p>
                        Our dedicated team prioritizes punctuality and efficient
                        logistics to ensure that your furniture arrives
                        precisely.
                    </p>

                    <a href="">
                        <img src={line} alt="" class="orange-line" />
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Process };
