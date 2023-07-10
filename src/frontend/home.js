import HeroImage from "../tools/hero";
import ReviewCard from "../tools/reviews";
import Footer from "../tools/footer";
import Contact from "../tools/contactus";
// import ReviewCard from "../tools/reviews";
function Home() {
  return (
    <div className="home">
      <HeroImage />
      <div className="about">
        <h2>
          Go With Gig Car <br />
          Your trusted Car rental <br />
          For your Gig Needs
        </h2>
        <p>
          Welcome to GoWithGigCAR, revolutionizing vehicle rentals in the heart
          of the gig economy. As an innovative and responsive company, we are
          here to support all gig workers across the United States, providing
          them with the flexibility and mobility they need to succeed in their
          careers. Our mission is to make your car rental experience as smooth
          and stress-free as possible.
        </p>
      </div>
      <h2 className="text-center mt-0">See What Everyone Is Saying</h2>
      <ReviewCard />
      <Contact />
    </div>
  );
}

export default Home;
