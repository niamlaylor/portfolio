export default function ExperienceGrid() {
  return(
    <dl className="mt-16 grid gap-4 sm:mt-14 grid-cols-2">
      <div className="flex flex-col-reverse hover:bg-gray-200 sm:p-10 lg:p-20">
        <dt className="text-base leading-7 text-gray-800">Development experience</dt>
        <dd className="text-4xl mb-2 font-bold leading-9 tracking-tight text-gray-900">1+ year</dd>
      </div>
      <div className="flex flex-col-reverse hover:bg-gray-200 sm:p-10 lg:p-20">
        <dt className="text-base leading-7 text-gray-800">Copywriting & UI/UX experience</dt>
        <dd className="text-4xl mb-2 font-bold leading-9 tracking-tight text-gray-900">5+ years</dd>
      </div>
    </dl>
  )
  
}