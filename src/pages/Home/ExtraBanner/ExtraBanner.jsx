import img from "../../../assets/banner2.jpg";

const ExtraBanner = () => {
  return (
    <div className="my-10 relative">
      <img src={img} className="h-[35rem] w-full" alt="" />
      <div className="w-2/3 mx-auto bg-slate-100 p-20 absolute top-32 left-52 rounded-lg">
        <h4 className="text-3xl font-bold text-center mb-5">Bistro Boss</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquam voluptatem necessitatibus quo laboriosam eligendi itaque
          magni. Vel odit aperiam mollitia cumque quaerat. Id sit, eius vero
          assumenda ut cumque?
        </p>
      </div>
    </div>
  );
};

export default ExtraBanner;
