import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu([]);
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"from our menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 my-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className=" text-center ">
        <button className="btn btn-outline border-0 border-b-4 mt-6">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
