const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Our Physical Location
      </h2>

      
  
      <h3 className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed dark:border-white dark:border-opacity-25">
        HEAD OFFICE <br/>
      <br/>
        <p> MPM Properties 
        402, Al Khaleej road, Opp hayat regency, Dubai 21275 </p>
       <p>  601 RANIA TOWER 6TH FLOOR,  AL BARSHA 1 , DUBAI , UAE</p>
      </h3><hr/>
      <h3> BRANCHES : </h3>
      <p> LEVEL 41, WEST TOWER, BAHRAIN FINANCIAL HUBOUR, KING FAISAL HIGHWAY, MANAMA BAHRAIN  </p>
      <br/>
      <hr/>
      <p> OFFICE 2/4, 1 PALL MALL EAST, LONDON SW1Y 5AU , UNITED KINGDOM </p><hr/>
     
      <div className="location mt-4 mr-4" >

      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7765550394324!2d55.306480375384325!3d25.278100977658987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzQxLjIiTiA1NcKwMTgnMzIuNiJF!5e0!3m2!1sen!2s!4v1706353533040!5m2!1sen!2s" width="300" height="300" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe> 

      </div>




    </div>
  );
};

export default NewsLatterBox;
