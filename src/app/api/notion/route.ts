import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE;

const notion = new Client({
  auth: notionSecret,
});

export const GET = async () => {
  try {
    if (!notionSecret || !notionDatabaseId)
      throw new Error("Missing Notion Secret.");

    const query = await notion.databases.query({
      database_id: notionDatabaseId,
    });

    const restructured = query.results.map((item) => {
      console.log(item);
      // @ts-ignore
      const { properties, icon, cover, id, last_edited_time } = item;
      return {
        id: id,
        last_edited_time: last_edited_time,
        name: properties.name.title[0].text.content,
        icon: icon.external.url ? icon.external.url : icon,
        contribution: properties.contribution.rich_text[0].plain_text,
        description: properties.description.rich_text[0].plain_text,
      };
    });
    const sortedArray = restructured.sort(
      (a, b) =>
        new Date(b.last_edited_time).getTime() -
        new Date(a.last_edited_time).getTime()
    );

    return NextResponse.json(sortedArray);
  } catch (error) {
    return NextResponse.json(error);
  }
};
