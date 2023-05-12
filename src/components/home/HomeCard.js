import HomeCardPanel from "./HomeCardPanel";

export default function HomeCard() {
  return(
    <section className="flex sm:flex-col md:flex-row lg:flex-row">
      <HomeCardPanel bgColor={"custom-gray"} type={"dev"}>Development</HomeCardPanel>
      <HomeCardPanel bgColor={"copywriting-green"} textColor={"custom-gold"} type={"copy"}>Copywriting</HomeCardPanel>
    </section>
  );
};