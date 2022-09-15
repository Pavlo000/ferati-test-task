import { ContactUs } from "../features/ContactUs";
import { Footer } from "../features/Footer";
import { FullScreenArticle } from "../features/FullScreenArticle";
import { Header } from "../features/Header";
import { Ilustration } from "../features/Ilustration";
import { Introduction } from "../features/Introduction";
import { Testimonials } from "../features/Testimonials";

export const Home: React.FC = () => {

  return (
    <div className="Home">
      <Header />

      <div className="container">
        <Introduction />
        
        <Ilustration hasReverse={false} />
      </div>

      <FullScreenArticle />

      <div className="container">
        <Ilustration hasReverse={true} />

        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}