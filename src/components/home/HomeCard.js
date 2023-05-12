import HomeCardPanel from "./HomeCardPanel";

export default function HomeCard() {
  return(
    <section className="flex sm:flex-col md:flex-row lg:flex-row">
      <HomeCardPanel bgColor={"copywriting-green"}>Copywriting</HomeCardPanel>
      <HomeCardPanel bgColor={"custom-gray"}>Development</HomeCardPanel>
    </section>
  );
};