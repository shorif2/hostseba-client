import Banner from "@/components/home/Banner";
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
    </div>
  );
}
