import ClientComponent from "@/components/ClientComponent";

function ServerPage() {
  console.log("Okay I am server ");
  return (
    <div>
    <div>  server Route Page</div>
    <ClientComponent/>
    </div>
  )
}

export default ServerPage
