import HomeCardPanel from "./HomeCardPanel";

export default function HomeCard() {
  return(
    <section className="flex sm:flex-col md:flex-row lg:flex-row">
      <HomeCardPanel bgColor={"bg-custom-gray"} type={"dev"} >Development</HomeCardPanel>
      <HomeCardPanel bgColor={"bg-copywriting-green"} textColor={"text-custom-gold"} type={"copy"}>Copywriting</HomeCardPanel>
    </section>
  );
};