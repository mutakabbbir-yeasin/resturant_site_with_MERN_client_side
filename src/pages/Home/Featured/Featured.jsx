import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured_image bg-fixed my-10 pt-5">
      <SectionTitle
        heading={"featured item"}
        subHeading={"Check It Out"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center space-x-6 pt-16 pb-24 px-36 bg-slate-500 bg-opacity-50">
        <div>
          <img src={img} alt="Featured Image" />
        </div>
        <div>
          <p className="text-white">May 20, 2023</p>
          <p className="uppercase text-white">Where can I get some</p>
          <p className="text-white font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo porro
            vero quibusdam eligendi, obcaecati nam ducimus sapiente architecto?
            Saepe deleniti voluptas eos aliquam facere, molestiae sequi nulla
            dicta vitae maxime et tempora corrupti commodi, quidem, inventore
            odio alias exercitationem aliquid!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-6">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
