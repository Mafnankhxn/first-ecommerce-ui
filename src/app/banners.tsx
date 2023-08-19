const banners = () => {
  return (
    <div className="mt-20">
        <span>
            <h1 className="text-center text-3xl font-bold underline underline-offset-8">Our Promotions</h1>
        </span>
      <section className=" mt-20 flex justify-center gap-x-10">
        <div className="grid justify-start gap-y-5">
            {/* right div */}
            <img className="flex-1" src="banner1.png" alt="skin care banner" height={300} width={500} />
            <img className="flex-1" src="banner2.png" alt="new product ad" height={300} width={500} />
      </div>
      <div>
        <img src="banner3.png" alt="makeup banner" height={530} width={530}/>
      </div>
      </section>
    </div>
  );
};

export default banners;
