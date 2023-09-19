const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10 mx-auto md:w-4/12">
      <p className="text-yellow-600 mb-3">--- {subHeading} ---</p>
      <h2 className="text-4xl font-bold uppercase border-y-4 p-3">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
