import { featuredProject, gridProjects } from "../../data/projects";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        id="projects-title"
        label="Selected work"
        title="Projects"
        description="Things I've built and shipped."
      />

      <div className="mt-10 space-y-5">
        <FeaturedProject project={featuredProject} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gridProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              delay={(index % 3) * 0.06}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
