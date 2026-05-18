import type { Project } from "@/data/projects";
import { ProjectThumbnailCarousel } from "@/components/ProjectThumbnailCarousel";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 p-6">
      {project.thumbnails && (
        <ProjectThumbnailCarousel thumbnails={project.thumbnails} />
      )}

      <h2 className="mb-3 text-xl font-bold">{project.title}</h2>

      <p className="mb-4 text-gray-600">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-semibold">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            GitHub
          </a>
        )}

        {project.lpUrl && (
          <a
            href={project.lpUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            LP
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            Demo
          </a>
        )}

        {project.demoStatus === "preparing" && (
          <span className="text-gray-400">Demo 準備中</span>
        )}
      </div>
      {project.demoAccessCode && (
        <p className="mt-3 text-xs text-gray-500">
          デモ用アクセスコード:{" "}
          <span className="font-semibold">{project.demoAccessCode}</span>
        </p>
      )}
    </article>
  );
};
