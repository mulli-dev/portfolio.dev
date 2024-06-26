import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/FigmaClone.png"
          title="Figma Clone"
          description="Figma Clone using Next.js 14, Tailwind CSS, Liveblocks,Fabric"
        />
        <ProjectCard
          src="/TravelWebsite.png"
          title="Travel Website"
          description="Travel Website Using Next.js 14, Tailwind CSS, TypeScript"
        />
        <ProjectCard
          src="/YoutubeClone.png"
          title="Youtube Clone"
          description="Youtube Clone Using React, Tailwind CSS, TypeScript"
        />
      </div>
      &nbsp,&nbsp
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/mernestate.png"
          title="Real Estate Website"
          description="Real Estate  Using MongoDB, Express, React, Nodejs"
        />
        <ProjectCard
          src="/precious.png"
          title="Fruits Sellings MERN Website"
          description="Modern Web Application Using MongoDB, Express, React, Nodejs"
        />
        <ProjectCard
          src="/mern auth.png"
          title="Auth Application"
          description="Auth Application Using MongoDB, Express, React, Nodejs"
        />
      </div>
      &nbsp,&nbsp
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/grovy.png"
          title=" Grocery Store Ecommerce "
          description=" Build Using HTML, CSS, JavaScript, PHP DPO"
        />
        <ProjectCard
          src="/carrent.png"
          title=" A Car Rental site with A/B TESTING using Next.js 14"
          description="Build Using Prepr CMS, React, Personalization"
        />
        <ProjectCard
          src="/PowerBi.png"
          title="Annual Pizza Sales Analysis PowerBI Report"
          description="A good report analysed using  Power BI and SQL Server"
        />
      </div>
      &nbsp,&nbsp
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/LoanReport .png"
          title=" Bank Loan Analysis PowerBI Report"
          description=" A good report analysed using  Power BI and SQL Server"
        />
        <ProjectCard
          src="/Annual Coffee Sales.png"
          title=" Annual Coffee Sales Analysis using Power Bi and SQL Server"
          description="Build Using Power BI , SQL, DAX"
        />
        <ProjectCard
          src="/PowerBi.png"
          title="Annual Pizza Sales Analysis PowerBI Report"
          description="A good report analysed using  Power BI and SQL Server"
        />
      </div>
    </div>
  );
};

export default Projects;
