import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const folders = {
    type: "folder",
    name: "root",
    children: [
      {
        type: "folder",
        name: "Documents",
        children: [
          {
            type: "file",
            name: "Resume.docx",
          },
          {
            type: "file",
            name: "CoverLetter.docx",
          },
        ],
      },
      {
        type: "folder",
        name: "Photos",
        children: [
          {
            type: "folder",
            name: "Vacation",
            children: [
              {
                type: "file",
                name: "Beach.png",
              },
              {
                type: "file",
                name: "Mountains.png",
              },
            ],
          },
        ],
      },
      {
        type: "file",
        name: "ToDo.txt",
      },
    ],
  };

  return NextResponse.json(folders)
};
