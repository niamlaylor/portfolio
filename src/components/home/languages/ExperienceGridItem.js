import Link from "next/link";

export default function ExperienceGridItem({ children, url, years }) {
  return(
    <Link href={url} className="flex flex-col-reverse hover:cursor-pointer bg-gray-100 hover:bg-gray-200 sm:p-10 lg:p-14">
      <span aria-hidden="true" className="mt-2 text-xs font-semibold">View projects &rarr;</span>
      <dt className="text-base leading-7 text-gray-800">{children}</dt>
      <dd className="text-4xl mb-2 font-bold leading-9 tracking-tight text-gray-900">{`${years}+ years`}</dd>
    </Link>
  )
}