const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Our Physical Location
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed dark:border-white dark:border-opacity-25">
        MUHASIB FINANCING BROKER EST.<br/>
        Opposite Hayath Regency 4th floor 402<br/>
        Frij Al Murar Deira, Dubai - 21275
      </p>
     
      <div className="location align-center flex " >

      <iframe width="750" height="300" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=250&amp;hl=en&amp;q=Muhasib%20Finajncing%20Frij%20Al%20murar%20Dubai+(Muhasib%20Financing)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>




      </div>




    </div>
  );
};

export default NewsLatterBox;
