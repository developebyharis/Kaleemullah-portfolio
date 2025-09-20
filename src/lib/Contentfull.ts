import { Asset, createClient } from "contentful";
import { unstable_noStore as noStore } from "next/cache";


export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API!,
});


export async function FetchHero() {
  noStore();
  const res = await client.getEntries({ content_type: "hero" });
  const hero = res.items[0];

  return {
    name: hero.fields.name as string,
    title: hero.fields.title as string,
    intro: hero.fields.intro as string,
    avatar: ((hero?.fields?.image as Asset)?.fields?.file?.url as string) ?? "",
  };
}

export async function FetchAbout(){
  const res = await client.getEntries({ content_type: "about" });
  const item = res.items[0];
  return {
    aboutMe: item.fields.aboutMe as string,
    cv: ((item.fields.cv as Asset)?.fields?.file?.url as string) ?? "",
  };
}
export async function FetchSkills() {
  const res = await client.getEntries({ content_type: "skills" });
  const item = res.items[0];
  return {
    hardSkills: item.fields.hardSkills as string[],
    softSkills: item.fields.softSkills as string[],
  };
}

export async function FetchEducation() {
  const res = await client.getEntries({ content_type: "education" });
  return res.items.map((edu) => ({
    degree: edu.fields.degree as string,
    school: edu.fields.school as string,
    startEnd: edu.fields.startEnd as string,
  }));
}

export async function FetchProjects() {
  const res = await client.getEntries({ content_type: "project" });

  return res.items.map((item) => ({
    name: item.fields.name as string,
    category: item.fields.category as string,
    description: item.fields.caseStudy as string,
    image: item.fields.image as Asset,
    company: item.fields.companyName as string,
    industry: item.fields.companyIndustry as string,
    location: item.fields.companyLocation as string,
    companySize: item.fields.companySize as string,
    website: item.fields.companyWebsite as string,
    topics: item.fields.topics as string,
  }));
}

export async function FetchServices() {
  const res = await client.getEntries({ content_type: "services" });

  return res.items.map((item) => ({
    name: item.fields.name as string,
    description: item.fields.description as string,
    keyValues: item.fields.keyValues as string[],
  }));
}

export async function FetchContact() {
  const res = await client.getEntries({ content_type: "contact" });
  const item = res.items[0];
  return {
    email: item.fields.email as string,
    linkedin: item.fields.linkedin as string,
  };
}
