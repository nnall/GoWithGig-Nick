import HeroImage from "../tools/hero";
import CardHome from "../tools/single_card";
import ReviewCard from "../tools/reviews";
import Footer from "../tools/footer";
import Contact from "../tools/contactus";

function Home() {
  return (
    <>
      <HeroImage />
      <CardHome />
      <h2 className="text-center mt-0">See What Everyone Is Saying</h2>
      <ReviewCard />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
