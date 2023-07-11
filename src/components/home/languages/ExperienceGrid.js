import ExperienceGridItem from "./ExperienceGridItem";

export default function ExperienceGrid() {
  return(
    <dl className="mt-16 mb-12 grid gap-4 sm:mt-14 sm:grid-cols-1 md:grid-cols-2">
      <ExperienceGridItem
        url={"/development"}
        years={3}
      >
        Development experience
      </ExperienceGridItem>
      <ExperienceGridItem
        url={"/copywriting"}
        years={5}
      >
        Copywriting & UI/UX experience
      </ExperienceGridItem>
    </dl>
  )
}