import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../src/assets/menu/banner3.jpg";
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg";
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg";
import soupImg from "../../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../../src/assets/menu/salad-bg.jpg";
// import drinksImg from "../../../src/assets/menu/salad-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  // const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Twilight Tastings | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      <SectionTitle subHeading="Don't Miss" heading="Today's offer" />
      <MenuCategory items={offered} />
      <MenuCategory items={desserts} title="desserts" img={dessertImg} />
      <MenuCategory items={pizza} title="pizza" img={pizzaImg} />
      <MenuCategory items={soup} title="soup" img={soupImg} />
      <MenuCategory items={salad} title="salad" img={saladImg} />
      {/* <MenuCategory items={drinks} title="drinks" img={drinksImg} /> */}
    </div>
  );
};

export default Menu;
