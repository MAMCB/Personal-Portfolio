import * as contentful from 'contentful';

interface EnvironmentVariables {
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID: string;
  NEXT_PUBLIC_CONTENTFUL_ENVIRONMET_NAME: string;
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: string;
}

declare global {
    interface ImportMeta {
        env: EnvironmentVariables;
    }
}

const client = contentful.createClient({ 
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMET_NAME,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
});

export default client;