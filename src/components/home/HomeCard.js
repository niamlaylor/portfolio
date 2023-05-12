import HomeCardPanel from "./HomeCardPanel";

export default function HomeCard() {
  return(
    <section className="flex sm:flex-col md:flex-row lg:flex-row">
      <HomeCardPanel bgColor={"blue"}/>
      <HomeCardPanel bgColor={"red"}/>
    </section>
  );
};