export async function generateStaticParams() {
    return [
        { pageName: "header" },
        { pageName: "footer" },
        { pageName: "stats" },
    ];
}

 function SectionPage({ params }) {
     const { pageName } = params;

    if (!pageName) {
        return <div>Invalid section</div>;
    }

    return (
        <div>
            <h1>Section Page</h1>
            <p>Page Name: {pageName}</p>
        </div>
    );
}

export default SectionPage;
