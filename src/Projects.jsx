import React from "react";
import ProjectContainer from "./ProjectContainer";
const Projects = () => {
  return (
    <div className="h-full items-center  flex w-275 ">
      <div className="tracking-widest text-xl ml-50 mt-27 mb-9">
        <h1
          className="bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent text-6xl sm:font-serif animate-pulse
        hover:cursor-default"
        >
          Projects
        </h1>
        <div className="ml-30 ">
          <a href="https://tadka-town-us8h.vercel.app/">
            <ProjectContainer 
            heading="Tadka Town – Food Ordering UI"
            discription="A React food menu app featuring food cards, prices, and click-to-add functionality using `useState`."
          />
          </a>
          <a href="https://to-do-list-nu-eight-46.vercel.app/">
             <ProjectContainer
            heading="To-Do List "
            discription="A weekly task management app that lets users add, organize, and filter tasks by day and completion status using HTML, CSS, and JavaScript."
          />
          </a>
          <a href="https://bookshelf-bice-nine.vercel.app/">
             <ProjectContainer
            heading="Book-Shelf"
            discription="Bookshelf is a responsive multi-page website built using HTML and CSS."
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
