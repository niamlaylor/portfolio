import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
  { name: 'BC Ferries app', href: '/copywriting/bcf-app' },
  { name: 'BC Ferries website', href: '/copywriting/bcf-website' },
  { name: 'DeeBee\'s packaging', href: '#' },
  { name: 'Medium articles', href: '#' },
]
const stats = [
  { name: 'BC Ferries app', value: 'BC Ferries app', date: 'Mar 2023' },
  { name: 'BC Ferries website', value: 'BC Ferries website', date: 'Mar 2023' },
  { name: 'DeeBee\'s packaging', value: 'DeeBee\'s packaging', date: 'Mar 2023' },
  { name: 'Medium articles', value: 'Medium articles', date: 'Mar 2023' },
]

export default function CopywritingLanding() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <FontAwesomeIcon icon={faPenToSquare} size="4x" className={"mb-5"}/>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Copywriting</h2>
          <p className="mt-6 text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} className={"hover:text-blue-500"}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse hover:bg-gray-200 p-5">
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
