import React from "react";

async function page() {
  const response = await fetch("http://localhost:3000/api/sections", {
    next: { revalidate: 10 },
  });
  const data = await response.json();

  return (
    <div>
      <h1>Section Page</h1>
      {data.sections.map((section) => (
        <p key={section.id}> {section.name} </p> 
      ))}
    </div>
  );
}

export default page;
