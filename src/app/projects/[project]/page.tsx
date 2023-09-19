import { type HTMLAttributes } from "react";
import { Client,  } from "@notionhq/client";
import ArticleHeader from "./article-header";

const notionSecret = process.env.NOTION_TOKEN;

const notion = new Client({
  auth: notionSecret,
});

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  params: { project: string };
}

export interface FromatedResponse {
  description: string;
  contribution: string;
  team: string[];
  summary: string;
  responsabilities: string[];
  name: string;
}

const ProjectPage = async ({ params }: LayoutProps) => {
  const pageId = params.project;
  const response = await notion.pages.retrieve({ page_id: pageId })
  
  // @ts-ignore
  const { last_edited_time, icon, cover } = response;
  const { description, contribution, team, summary, responsabilities, name } =
  // @ts-ignore
    response.properties;
  const formatedResponse: FromatedResponse = {
    description: description.rich_text[0].plain_text,
    contribution: contribution.rich_text[0].plain_text,
    team: team.multi_select.map((teamate: { name: string }) => teamate.name),
    summary: summary.rich_text[0].plain_text,
    responsabilities: responsabilities.multi_select.map(
      (item: { name: string }) => item.name
    ),
    name: name.title[0].plain_text,
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <ArticleHeader
        summary={formatedResponse.summary}
        contribution={formatedResponse.contribution}
        name={formatedResponse.name}
        team={formatedResponse.team}
        responsabilities={formatedResponse.responsabilities}
        last_edited_time={last_edited_time}
        icon={icon}
        description=""
      />
    </div>
  );
};

export default ProjectPage;
