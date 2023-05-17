import HomeProjectCard from "./HomeProjectCard";

export default function HomeCardPanelItem({ project }) {
  return (
    <li className="w-full relative">
      <HomeProjectCard project={project} />
    </li>
  );
}
