"use client";
import { useState, useEffect } from "react";
import contentful, {
  Entry,
  EntryCollection,
  EntrySkeletonType,
} from "contentful";
import client from "@/contentfulClient";
import ProjectsCard from "@/components/ProjectsCard";

interface Project {
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: {
    contributors: string[];
    deployedProjectLink: string;
    description: string;
    githubRepoLink: string;
    groupProject: boolean;
    id: number;
    name: string;
    techStack: string;
    thumbnail: {
      fields: {
        description: string;
        file: {
          contentType: string;
          details: {
            size: number;
            image: any; // You can define a more specific type for image details if needed
          };
          fileName: string;
          url: string;
        };
        title: string;
      };
      metadata: {
        tags: string[]; // Define the type for tags if needed
      };
      sys: {
        space: any; // Define a specific type if needed
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        // Add any other properties if needed
      };
    };
  };
}

export default function Projects() {
  const [projects, setProjects] = useState<Entry<EntrySkeletonType>[]>([]);

  useEffect(() => {
    client
      .getEntries<EntrySkeletonType>()
      .then((response: EntryCollection<EntrySkeletonType>) => {
        const filteredProjects = response.items.filter(
          (item: Entry<EntrySkeletonType>) =>
            item.sys.contentType.sys.id === "webDevProject"
        );
        setProjects(filteredProjects);
      });
  }, []);

  return (
    <div>
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        My projects
      </h1>
      <div className=" md:flex md:justify-evenly">
        {projects.length > 0 ? (
          projects.map((project: Entry<EntrySkeletonType>) => (
            <ProjectsCard
              key={project.sys.id}
              project={{
                ...project,
                contentTypeId: project.sys.contentType.sys.id,
              }}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
