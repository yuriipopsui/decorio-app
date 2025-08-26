<<<<<<< HEAD
import React from 'react';
import ProjectCardOne from '@/components/ui/cards/projectCardOne';
import SectionTitle from '@/components/ui/sectionTitle';
import { projectsData } from '@/lib/fackData/projectsData';
=======
import ProjectCardOne from "@/components/ui/cards/projectCardOne";
import SectionTitle from "@/components/ui/sectionTitle";
import { projectsData } from "@/lib/fackData/projectsData";
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
import {
  cardSlideAnimation,
  cardSlideAnimationDelay,
  cardSlideAnimationRight,
  cardSlideAnimationRightDelay,
<<<<<<< HEAD
} from '@/lib/utils';

export const metadata = {
  title: 'Architronix -- Product Archive',
  description: 'Architronix is a next js and tailwind css website',
=======
} from "@/lib/utils";

export const metadata = {
  title: "Architronix -- Product Archive",
  description: "Architronix is a next js and tailwind css website",
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
};

const ProjectArchive = () => {
  return (
    <section>
      <div className="container-fluid ">
        <SectionTitle
<<<<<<< HEAD
          sectionName={'Archive'}
          sectionTitle={'A Journey Through Our Past Projects'}
          sectionDesc={'Exploring the Tapestry of Our Design Legacy'}
=======
          sectionName={"Archive"}
          sectionTitle={"A Journey Through Our Past Projects"}
          sectionDesc={"Exploring the Tapestry of Our Design Legacy"}
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
        />
      </div>
      <div className="lg:pt-30 2sm:pt-20 pt-14">
        <div className="">
          {projectsData.map(
            ({
              id,
              project_desc,
              project_img,
              project_name,
              project_year,
              project_type,
              location,
              link,
            }) => {
              if (id % 2 === 0) {
                return (
                  <ProjectCardOne
                    key={id}
                    project_desc={project_desc}
                    project_img={project_img}
                    project_type={project_type}
                    location={location}
                    project_year={project_year}
                    link={link}
                    project_name={project_name}
<<<<<<< HEAD
                    order={'lg:order-1 order-0'}
                    position={
                      'lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2'
=======
                    order={"lg:order-1 order-0"}
                    position={
                      "lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
                    }
                    imageVariants={cardSlideAnimationRight()}
                    cardVariants={cardSlideAnimationRightDelay()}
                  />
                );
              } else {
                return (
                  <ProjectCardOne
                    key={id}
                    project_desc={project_desc}
                    project_img={project_img}
                    project_type={project_type}
                    location={location}
                    project_year={project_year}
                    link={link}
                    project_name={project_name}
                    position={
<<<<<<< HEAD
                      'lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2'
=======
                      "lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
                    }
                    imageVariants={cardSlideAnimation()}
                    cardVariants={cardSlideAnimationDelay()}
                  />
                );
              }
<<<<<<< HEAD
            },
=======
            }
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;
