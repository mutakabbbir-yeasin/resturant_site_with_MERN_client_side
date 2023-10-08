import { Helmet } from "react-helmet-async";
import Carousel from "../../Carousel/Carousel";
import Category from "../Category/Category";
import ExtraBanner from "../ExtraBanner/ExtraBanner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Twilight Tastings | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Carousel></Carousel>
      <Category></Category>
      <ExtraBanner></ExtraBanner>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
