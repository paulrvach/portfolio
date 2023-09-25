//@ts-ignore
import { type HTMLAttributes } from "react";
import { Client } from "@notionhq/client";
import ArticleHeader from "./article-header";
import { NotionToMarkdown } from "notion-to-md";
import Markdown from "markdown-to-jsx";

const notionSecret = process.env.NOTION_TOKEN;

const notion = new Client({
  auth: notionSecret,
});



export interface FromatedResponse {
  id: string;
  description: string;
  contribution: string;
  team: string[];
  summary: string;
  responsabilities: string[];
  name: string;
}

async function ProjectPage({ params }: { params: { project: string } }) {
  const pageId = params.project;
  // @ts-ignore
  const pageProperties = (await notion.pages.retrieve({
    page_id: pageId,
  })) as any;
  // notion to markdown
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const notionMarkdownString = async () => {
    const mdblocks = (await n2m.pageToMarkdown(pageId)) as any;
    const mdString = n2m.toMarkdownString(mdblocks);
    return mdString.parent;
  };
  const markdown = await notionMarkdownString();

  const { last_edited_time, icon, cover } = pageProperties;
  const { description, contribution, team, summary, responsabilities, name } =
    pageProperties.properties;
  const formatedResponse: FromatedResponse = {
    id: pageProperties.id,
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
    <div className="flex flex-col items-center justify-center w-full mt-48">
      <div className=" max-w-2xl">
        <ArticleHeader
          summary={formatedResponse.summary}
          contribution={formatedResponse.contribution}
          name={formatedResponse.name}
          team={formatedResponse.team}
          responsabilities={formatedResponse.responsabilities}
          last_edited_time={last_edited_time}
          icon={icon}
          description=""
          id=""
        />
        <article className="prose  dark:prose-invert prose-img:rounded-2xl prose-img:shadow-md max-w-none mt-24">
          <Markdown>{markdown}</Markdown>
        </article>
      </div>
    </div>
  );
}

export default ProjectPage;
