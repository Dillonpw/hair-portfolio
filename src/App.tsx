import Header from "./Header";
import HomeGallery from "./HomeGallery";
import Footer from "./FooterComponent";

const HeroText: React.FC = () => {
  return (
    <>
      {/*Style with a fade in effect -- slide in from right */}
      <div className="m-8 fade-in-left w-fit rounded-xl border-2 border-black bg-white p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
        <h1 className=" ml-4 text-7xl">I'm Saraya!</h1>
        <p className="m-4 text-xl">
          With Nearly two decades of experience styling hair, there's nothing I
          Havent seen, and theres nothing I haven't done! <br />
          Take a look at some of my work!
        </p>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <main className="h-100 relative bg-gradient-to-br from-pink-400 to-sky-950">
      <Header />
      <HeroText />
      <HomeGallery />
      <Footer />
    </main>
  );
};

export default App;
