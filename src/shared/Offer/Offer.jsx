import "./Offer.css";

const Offer = () => {
  return (
    <div className="bg-img mt-16">
      <div className="text-container lg:w-[50%] w-[90%] flex flex-col gap-2 md:text-xl">
        <p>SPECIAL offers</p>
        <p className="text-5xl font-mono font-bold">
          <span className="text-orange-600">25% </span>
          <span>off</span>
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <h2 className="text-2xl font-semibold">Lorem, ipsum dolor.</h2>
        <p>Lorem, ipsum.</p>
      </div>
    </div>
  );
};

export default Offer;