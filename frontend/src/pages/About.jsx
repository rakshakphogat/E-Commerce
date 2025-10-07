import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we are passionate about bringing you the finest
            collection of fashion and lifestyle products. Our mission is to
            create exceptional shopping experiences by combining quality
            craftsmanship with contemporary design and unbeatable value.
          </p>
          <p>
            Founded with a vision to make premium fashion accessible to
            everyone, we carefully curate each product to ensure it meets our
            high standards of quality, style, and affordability. Every purchase
            supports ethical manufacturing practices and sustainable business
            operations.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We believe that great style should be effortless and accessible. Our
            dedicated team works tirelessly to source the latest trends and
            timeless classics, ensuring that our customers always find exactly
            what they're looking for at prices that make sense.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            We maintain the highest standards of quality control, ensuring every
            product meets our rigorous testing criteria. Our partnerships with
            trusted manufacturers guarantee authentic, durable products that
            deliver exceptional value and long-lasting satisfaction.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Experience the convenience of seamless online shopping with fast,
            reliable delivery and easy returns. Our user-friendly platform makes
            it effortless to browse, compare, and purchase your favorite items
            from the comfort of your home.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Our dedicated customer service team is always ready to assist you
            with personalized recommendations, order tracking, and support.
            We're committed to building lasting relationships through
            exceptional service and continuous innovation.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
