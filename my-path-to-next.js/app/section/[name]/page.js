export async function generateStaticParams() {
    return [
        { name: "header" },
        { name: "footer" },
        { name: "stats" },
    ];
}

 function SectionPage({ params }) {
 
    return (
        <div>
            <h1>Section Page</h1>
            <p>Page Name: {params.name}</p>
        </div>
    );
}

export default SectionPage;
