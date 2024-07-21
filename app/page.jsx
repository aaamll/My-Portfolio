import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div className="font-serif ">
      <Navbar />
      <div className="main mt-40 text-center ">
        <h1 className="text-7xl  mt-64 mb-14 font-extrabold  text-red-500" id="h1-Text" >Hy there, I'm Ali</h1>
        <h3 className="lg:text-4xl mx-4 text-blue-500  text-3xl" >A freelance Web developer who loves to help business to grow Online</h3>
          <h1 className="text-white text-2xl mt-36">Created using Next.js</h1>
        </div>      
    </div>
  );
}
