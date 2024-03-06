"use client";

import {
  ExperienceRoot,
  defineComponents,
  useFetchBySlug,
} from "@contentful/experiences-sdk-react";
import Image from "next/image";
import Button from "./components/Button";
import { createClient } from "contentful";

const client = createClient({
  space: "nsz6oir036zi",
  environment: "master",
  // needs to be preview token if host = 'preview.contentful.com' and delivery token if 'cdn.contentful.com'
  accessToken: "w4_r6Zul4cl3SfoE48nDn5FEcByxhXtPZoM4310q62M",
  // optional. Set it to 'preview.contentful.com' in "preview" mode. Uses cdn.contentful.com by default
  host: "preview.contentful.com",
});

export default function Home() {
  defineComponents([
    {
      component: Button,
      definition: {
        id: "button1",
        name: "Button1",
        category: "Buttons",
        variables: {
          text: {
            displayName: "Text",
            type: "Text",
            defaultValue: "Click me!",
          },
        },
      },
    },
    {
      component: Button,
      definition: {
        id: "button2",
        name: "Button2",
        category: "Buttons",
        variables: {
          text: {
            displayName: "Text",
            type: "Text",
            defaultValue: "Button2",
          },
        },
      },
    },
  ]);

  const { experience, isLoading, error } = useFetchBySlug({
    client,
    slug: "first", //Could be fetched from the url,
    experienceTypeId: "dpFirst",
    localeCode: "en-US",
  });

  // handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <ExperienceRoot experience={experience} locale={"en-US"} />;
}
