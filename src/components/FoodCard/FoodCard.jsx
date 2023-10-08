const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-7">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white px-2 py-1 rounded-sm absolute top-5 right-7">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-200 mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
