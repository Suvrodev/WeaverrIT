import React from "react";
import CEO from "../CEO/CEO";
import Supporter from "../Supporters/Supporter";
import Marketers from "../Marketers/Marketers";
import MateBanner from "../../../assets/Banner/MateBanner.avif";
import Logo from "../../../assets/Logo/Site_Logo.png";
import { Helmet } from "react-helmet-async";
import OnMount from "../../../Layout/Refer/OnMount/OnMount";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import TeamMate from "../TeamMate/TeamMate";

const About = () => {
  const handleSubmit = () => {};
  return (
    <div className="">
      <Helmet>
        <title>About | WeaverrIT</title>
      </Helmet>
      <OnMount></OnMount>

      {/* <div className='relative'>
                <img className='w-[100%] rounded-xl opacity-40' src={MateBanner} alt="" />
                <img className='absolute top-[20%] right-10 w-[250px]' src={Logo} alt="" />
                <h1 className=' absolute top-[40%] md:top-[30%] right-10 text-xl md:text-4xl font-bold text-center my-4  mx-auto rounded-tr-lg rounded-bl-lg p-2'>Meet with Our Teammate</h1>
            </div> */}

      <div>
        <h1 className="text-4xl font-bold mb-8">About us</h1>
        <div className="flex flex-col gap-2">
          {/* <p>WeaverrIT is a skill development platform focusing on live learning. We have 30,000+ users on our platform and 4500+ learners who graduated and are still learning in WeaverrIT.</p>
                    <p> We provide skill development opportunities to university students, job holders, job seekers, and freelancers who want to learn or develop skills from the best instructors.</p>
                    <p>Develop your skill with the best industry experts through live learning, task-based curriculum, and track your progress through our progress tracking dashboard. Get all the resources easily and get access to one of the richest talentpools.</p>
                    <p>Trade licence number- xxxxx</p> */}
          <p>
            At Weaverr IT, our primary aim is to empower the community through
            exceptional learning standards. We are dedicated to the ongoing
            enhancement of our leaders, who are instrumental in shaping a
            brighter future. Our commitment extends to sharing knowledge to
            foster individual success and contribute positively to society.
          </p>
        </div>
      </div>

      <div className="my-10">
        <TeamMate></TeamMate>
        {/* <CEO></CEO>
                <Supporter></Supporter>
                <Marketers></Marketers> */}
      </div>
    </div>
  );
};

export default About;
