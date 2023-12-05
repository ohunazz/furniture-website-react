import { Explore } from "./sections/explore/Explore";
import { Features } from "./sections/features/Features";
import { Hero } from "./sections/hero/Hero";
import { Process } from "./sections/process/Process";
import { Product } from "./sections/product/Product";
import { Review } from "./sections/review/Review";
import { Subscribe } from "./sections/subscribe/Subscribe";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Footer } from "./sections/footer/Footer";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
            <Product />
            <Process />
            <Explore />
            <Review />
            <Subscribe />
            <Footer />
        </>
    );
};

export { Home };
