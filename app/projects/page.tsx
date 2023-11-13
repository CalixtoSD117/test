'use client'
import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'
import { useState } from "react";
import { pageprojects } from '../constants'
import { Card } from '@/components/projectscomponent/Card'
import { Modal } from '@/components/projectscomponent/Modal'

const page = () => {

    const [modal, setmodal] = useState(null)

    const handleopenmodal = (id) => {
        setmodal(id)
    }

    return (
        <>
            <Breadcrumb
                pageName="Projects"
                description="Here you can see our projects and the work we have done."
            />
            <section className='relative py-16 md:py-20 lg:py-28'>
                <div className="container">

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center mt-10'>
                            {
                                pageprojects.map((project) => (
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
                                ))
                            }
                        </div>

                </div>
            </section>
        </>
    )
}

export default page