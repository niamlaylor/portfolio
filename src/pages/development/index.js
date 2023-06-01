const links = [
  { name: 'Portfolio site', href: '#' },
  { name: 'Sifter', href: '#' },
  { name: 'Scheduler', href: '#' },
  { name: 'ListEasy', href: '#' },
]
const stats = [
  { name: 'See how I made my portfolio with Next.js, React and more.', value: 'Portfolio site', date: 'Jun 2023' },
  { name: 'A recipe parser that creates a formatted recipe from a recipe site.', value: 'Sifter', date: 'Apr 2023' },
  { name: 'React application to allow applicants to book and manage job interviews.', value: 'Scheduler', date: 'Feb 2023' },
  { name: 'Smart to-do list web app that automatically sorts tasks with AI.', value: 'ListEasy', date: 'Jan 2023' },
]

export default function DevelopmentLanding() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Development</h2>
          <p className="mt-6 text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base text-gray-800 font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-800">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
