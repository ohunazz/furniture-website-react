import { Features } from "./sections/features/Features";
import { Hero } from "./sections/hero/Hero";
import { Product } from "./sections/product/Product";
import { TopNavigation } from "./sections/top-navigation/TopNavigation";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
            <Product />
        </>
    );
};

export { Home };
