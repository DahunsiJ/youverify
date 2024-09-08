import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import AboutComponent from '../component/AboutComponent';
import { aboutData } from '../assets/homepageData';


const AboutContainer = () => {
  const elementRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [isIntersecting]);

  return (
    <section className="py-16 px-5 sm:px-20 bg-gray-100">
      <h1 className="text-4xl text-center font-extrabold mb-12 text-gray-900">
        Why Essential Jobs
      </h1>

      <div ref={elementRef} className="flex flex-wrap justify-center gap-8 items-center">
          {[aboutData.map((eachData, index)=>{
            return(
              <div key={index}
              style={{ transitionDelay: `${index * 300}ms` }} // Delay each item
              className={`${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transform transition-all duration-700 ease-out`}
              >
              <AboutComponent
                  logo={<FaBriefcase className="text-orange-600 text-4xl" />}
                  title={eachData.title}
                  content={eachData.content}
                  />
                  </div>
            )
          })]}
        </div>
    </section>
  );
};

export default AboutContainer;
