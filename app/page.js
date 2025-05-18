import Banner from "@/components/home/Banner";
import Copyright from "@/components/home/Copyright";
import Footer from "@/components/home/Footer";
import Review from "@/components/home/Review";
import Service from "@/components/home/Service";
import WhyChoose from "@/components/home/WhyChoose";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyUs />
      <Service />
      <WhyChoose />
      <Review />
      <Footer />
    </div>
  );
}
