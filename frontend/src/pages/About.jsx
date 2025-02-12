import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi quod nihil beatae ut. Et modi animi eius molestiae culpa mollitia ducimus, sint, accusamus quisquam laudantium placeat iure sapiente voluptatem!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti, aliquid atque, totam soluta pariatur velit nesciunt consequuntur molestiae veniam ex fuga corporis reprehenderit! Deleniti excepturi at similique impedit iusto!</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo adipisci vero mollitia animi sapiente inventore consequuntur sequi provident placeat blanditiis, ipsa modi praesentium vitae iusto repellat officiis veritatis voluptas fugit.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cupiditate, dolores eius id dignissimos libero ipsa fugiat exercitationem necessitatibus laborum qui nihil, nemo culpa enim earum voluptate. Reiciendis, illum. Similique.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cupiditate, dolores eius id dignissimos libero ipsa fugiat exercitationem necessitatibus laborum qui nihil, nemo culpa enim earum voluptate. Reiciendis, illum. Similique.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cupiditate, dolores eius id dignissimos libero ipsa fugiat exercitationem necessitatibus laborum qui nihil, nemo culpa enim earum voluptate. Reiciendis, illum. Similique.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
