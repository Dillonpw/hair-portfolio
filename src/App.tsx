import Header from "./Header";
import HomeGallery from "./HomeGallery";
import Footer from "./FooterComponent";

const App: React.FC = () => {
  return (
    <main className="h-100 relative bg-gradient-to-br from-pink-400 to-sky-950">
      <Header />
      <HomeGallery />
      <Footer />
    </main>
  );
};

export default App;
