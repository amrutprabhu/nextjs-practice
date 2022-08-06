import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="px-4 py-0">
      <Nav />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   console.log("server ->");
//   console.log(session);
//   return {
//     props: { session },
//   };
// }
