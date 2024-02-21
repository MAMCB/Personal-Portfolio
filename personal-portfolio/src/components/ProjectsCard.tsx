"use client";
import { Card } from "flowbite-react";
import { Link, To } from "react-router-dom";
import contentful, {
  Entry,
  EntryCollection,
  EntrySkeletonType,
} from "contentful";
import { FC, Key } from "react";

interface Project {
  fields: {
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    name: string;
    deployedProjectLink?: string;
    githubRepoLink: string;
    description: string;
    contributors?: string[];
  };
}

const ProjectsCard: FC<{ project: EntrySkeletonType }> = ({ project }) => {
  function getLastSubstringFromUrl(url: string): string {
    const parts = url.split("/");
    return parts[parts.length - 1];
  }

  return (
    <Card
      className="w-full  md:max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={project.fields.thumbnail.fields.file.url}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.fields.name}
      </h5>
      {project.fields.deployedProjectLink && (
        <a
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          href={project.fields.deployedProjectLink}
          target="_blank"
        >
          Live version
        </a>
      )}
      <a
        className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        href={project.fields.githubRepoLink}
        target="_blank"
      >
        Github link
      </a>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {project.fields.description}
      </p>
      {project.fields.contributors && (
        <div>
            <h5>Contributors: </h5>
            {project.fields.contributors.map(
                (contributor: To, index: Key | null | undefined) => (
                    <a
                        className="mr-4 "
                        key={index}
                        href={String(contributor)}
                        target="_blank"
                    >
                        {getLastSubstringFromUrl(String(contributor))}
                    </a>
                )
            )}
        </div>
      )}
    </Card>
  );
};

export default ProjectsCard;
