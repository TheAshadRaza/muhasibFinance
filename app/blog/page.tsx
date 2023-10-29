import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Transforming Financial Visions into Reality"
        description="Explore our range of services designed to cater to your specific needs, and let's embark on this transformative journey together. Your dreams are the destination, we provide the roadmap and support to get you there."
      />

      <section className="pt-[120px] pb-[140px]">
        <div className="container ">
          <div className="-mx-12 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full shadow-2xl hover:shadow-sm cursor-hower shadow-white py-5 px-8 mt-4 md:w-1/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>

              
            ))}
          </div>

          {/* <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
