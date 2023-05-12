import HomeCardPanel from "./HomeCardPanel";

export default function HomeCard() {
  return(
    <section className="flex sm:flex-col md:flex-row lg:flex-row">
      <HomeCardPanel bgColor={"custom-gray"}>Development</HomeCardPanel>
      <HomeCardPanel bgColor={"copywriting-green"} textColor={"custom-gold"}>Copywriting</HomeCardPanel>
    </section>
  );
};