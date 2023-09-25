import { NextResponse } from "next/server";
const TOKEN = process.env.GITHUB_TOKEN;

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export const GET = async (request: Request) => {
  const userName = "paulrvach";
  const variables = `
    {
      "userName": "${userName}"
    }
  `;
  const body = {
    query,
    variables,
  };
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });
    const githubData = await res.json()
    console.log(githubData)
    return NextResponse.json(githubData);
  } catch (error) {
    return NextResponse.json(error);
  }
};
