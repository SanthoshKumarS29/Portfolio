import React,{useState} from 'react'
import { FaPython , FaBootstrap ,FaReact  } from 'react-icons/fa';
import { SiTailwindcss,SiJavascript  } from "react-icons/si";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechStack = () => {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 7000,
            cssEase: "linear",
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 425,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  }
                }
              ]
          };
          
          const logos = [
            { icon: FaReact, name: "React", color: "text-blue-400" },
            { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
            { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
            { icon: FaPython, name: "Python", color: "text-green-500" },
          ];
    
          const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='text-white' id="Education">
        <div className='m-10 lg:my-20' id='service'>
            <div className='flex flex-col gap-7 items-center my-6 p-2'>
                <h2 className='text-4xl text-[#7a50eb]'>TechStacks</h2>
                <p className='text-xl text-center'>A collection of technologies I utilize to develop efficient and scalable web applications.</p>
            </div>
            <div className="w-full py-10">
                <Slider {...settings} className="flex overflow-hidden items-center">
                    {logos.map((logo, index) => {
                    const Icon = logo.icon;
                    return (
                        <div key={index} className="px-4" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <div className='flex justify-center items-center gap-x-5'>
                                <Icon className={`text-7xl transition-colors duration-300 ${ hoveredIndex === index ? logo.color : "text-[#7a50eb]"}`}/>
                                <span className="mt-2 text-white text-xl">{logo.name}</span>
                            </div>
                        </div>
                    );
                    })}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default TechStack