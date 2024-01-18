import Header from "./Header";
import Footer  from "./FooterComponent";

const About: React.FC = () => {
  return (
    <div className="h-100 relative bg-gradient-to-br from-pink-400 to-sky-950">
      <Header />
      <Footer />
    </div>
  );
};

export default About;
