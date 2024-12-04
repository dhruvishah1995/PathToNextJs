import { NextResponse } from "next/server";

let sections = [
  { id: 1, name: "header" },
  { id: 2, name: "footer" },
  { id: 4, name: "dashboard" },
  { id: 5, name: "contactUs" },
];

export async function GET() {
  return NextResponse.json({ sections });
}

export async function DELETE(request) {
  const data = await request.json();
  sections = sections.filter((section) => section.id !== data.id);
  console.log("response ", sections);
  return NextResponse.json({ sections });
}

export async function POST(request) {
  const data = await request.json();
  const newData = { id: sections.length + 1, name: data.name };
  sections.push(newData);
  console.log("new response ", sections);
  return NextResponse.json({ sections });
}
