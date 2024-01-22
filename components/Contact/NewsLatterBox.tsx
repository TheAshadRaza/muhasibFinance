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
        Head Office .<br/>
      <br/>
       <p>  601 RANIA TOWER 6TH FLOOR,  AL BARSHA 1 , DUBAI , UAE</p>
      </h3>
      <h3> Branches </h3>
      <p> LEVEL 41, WEST TOWER, BAHRAIN FINANCIAL HUBOUR, KING FAISAL HIGHWAY, MANAMA BAHRAIN  </p> <br/>
      <p> OFFICE 2/4, 1 PALL MALL EAST, LONDON SW1Y 5AU , UNITED KINGDOM </p>
     
      <div className="location mr-4" >

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5727296853797!2d55.2045613!3d25.116320899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc01adfbe3d%3A0x433ae1ea35a7f636!2sQualityline%20Electro%20Mechanical%20LLC%D8%8C%20Rania%20Business%20Center%20-%20Office%20401%202nd%20St%20-%20Al%20Barsha%20-%20Al%20Barsha%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1705954419397!5m2!1sen!2sae" width="300" height="300" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe> 


      </div>




    </div>
  );
};

export default NewsLatterBox;
