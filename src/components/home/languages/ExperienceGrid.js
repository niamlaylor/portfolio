import Link from "next/link";

export default function ExperienceGrid() {
  return(
    <dl className="mt-16 mb-12 grid gap-4 sm:mt-14 sm:grid-cols-1 md:grid-cols-2">
      <Link href="/development" className="flex flex-col-reverse hover:cursor-pointer bg-gray-100 hover:bg-gray-200 sm:p-10 lg:p-14">
        <span aria-hidden="true" className="mt-2 text-xs font-semibold">View projects &rarr;</span>
        <dt className="text-base leading-7 text-gray-800">Development experience</dt>
        <dd className="text-4xl mb-2 font-bold leading-9 tracking-tight text-gray-900">3+ years</dd>
      </Link>
      <Link href="/copywriting" className="flex flex-col-reverse hover:cursor-pointer bg-gray-100 hover:bg-gray-200 sm:p-10 lg:p-14">
        <span aria-hidden="true" className="mt-2 text-xs font-semibold">View projects &rarr;</span>
        <dt className="text-base leading-7 text-gray-800">Copywriting & UI/UX experience</dt>
        <dd className="text-4xl mb-2 font-bold leading-9 tracking-tight text-gray-900">5+ years</dd>
      </Link>
    </dl>
  )
}