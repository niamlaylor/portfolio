import RepoCTA from "@/components/buttons/RepoCTA";

const links = [
  { name: 'View Github', href: 'https://github.com/niamlaylor' },
  { name: 'Connect on LinkedIn', href: '#' },
]
const stats = [
  { 
    name: 'See how I made my portfolio with Next.js, React and more.', 
    value: 'Portfolio site', 
    date: 'Jun 2023', 
    repo:'https://github.com/niamlaylor/portfolio' 
  },
  { 
    name: 'A recipe parser that creates a formatted recipe from a recipe site.', 
    value: 'Sifter', 
    date: 'Apr 2023', 
    repo:'https://github.com/niamlaylor/recipes-next' 
  },
  { 
    name: 'React application to allow applicants to book and manage job interviews.', 
    value: 'Scheduler', 
    date: 'Feb 2023', 
    repo:'https://github.com/niamlaylor/scheduler' 
  },
  { 
    name: 'Smart to-do list web app that automatically sorts tasks with AI.', 
    value: 'ListEasy', 
    date: 'Jan 2023', 
    repo:'https://github.com/niamlaylor/smart-todo-list' 
  },
  { 
    name: 'A JavaScript testing assertion library published on npm.', 
    value: 'Lotide', 
    date: 'Oct 2022', 
    repo:'https://github.com/niamlaylor/lotide' 
  },
]

export default function DevelopmentLanding() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Development</h2>
          <p className="mt-6 text-lg leading-8">
            Below are some of my recent projects built using
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
          <dl className="mt-4 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <RepoCTA url={stat.repo}>View on Github</RepoCTA>
                <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                <dd className="text-sm font-bold leading-9 tracking-tight text-blue-500">{stat.date}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
