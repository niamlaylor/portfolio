import HomeCardPanel from "./HomeCardPanel";
import MediumCarousel from "./MediumCarousel";

export default function HomeCard() {
  return(
    <section className="flex sm:flex-col md:flex-row lg:flex-row">
      <HomeCardPanel bgColor={"bg-black"} textColor={"text-white"} type={"dev"} >Development</HomeCardPanel>
      <HomeCardPanel bgColor={"bg-black"} textColor={"text-white"} type={"copy"}>Copywriting</HomeCardPanel>
      <MediumCarousel />
    </section>
  );
};