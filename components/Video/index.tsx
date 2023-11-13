"use client";
import { useState } from "react";
import Link from "next/link";
import { Card } from "../projectscomponent/Card";
import { Modal } from "../projectscomponent/Modal";
import { projects } from '../../app/constants/index';
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [modal, setmodal] = useState(null); // Usar null como valor inicial

  const handleopenmodal = (id) => {
    setmodal(id);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className='mt-10'>
          <SectionTitle
            title="Our Projects"
            paragraph="Innovation | Quality | Trustworthy"
            center
            mb="80px"
          />

          <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 mt-10'>
            {projects.map((project) => (
              <>
                <Card
                  key={project.title}
                  title={project.title}
                  openmodal={() => handleopenmodal(project.id)} // Usar project.id en lugar de project.title
                  imagep={project.principalimage}
                />
                <Modal
                  key={project.title}
                  modal={modal === project.id} // Comparar con project.id en lugar de project.title
                  setmodal={setmodal}
                  title={project.title}
                  desc={project.description}
                  img1={project.image1}
                  img2={project.image2}
                  img3={project.image3}
                  img4={project.image4}
                />
              </>
            ))}
          </div>

          <div className='mt-10 flex justify-center items-center'>
            <Link href="projects" className='bg-primary text-white text-base font-semibold px-8 py-4 rounded-md hover:bg-primary/80 duration-300 ease-in-out'>
              <span >
                More projects
              </span>
            </Link>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;
