import Head from 'next/head';
import Link from 'next/link';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectCTA from '../../components/buttons/ProjectCTA';

const links = [
  { name: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/liamnnaylor/' },
  { name: 'Medium articles', href: 'https://medium.com/@liamnaylorr' },
]
const stats = [
  { name: 'UX writing for an iOS/Android travel app with six-figure downloads.', value: 'BC Ferries app', date: 'Apr 2023', url: '/copywriting/bcf-app', cta: 'View the app' },
  { name: 'Recent thought leadership style articles on some of my favourite topics.', value: 'Medium articles', date: 'Apr 2023', url: 'https://medium.com/@liamnaylorr', cta: 'Read articles' },
  { name: 'Content design and UX writing for a travel website with 1M+ users.', value: 'BC Ferries website', date: 'Sept 2020', url: '/copywriting/bcf-website', cta: 'View project' },
  { name: 'Writing travel content for an \"Expedia-like\" travel package platform.', value: 'BC Ferries Vacations', date: 'Sept 2020', url: '/copywriting/bcf-vacations', cta: 'See BC Ferries Vacations' },
]

export default function CopywritingLanding() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <Head>
        <title>Copywriting | Liam Naylor</title>
        <meta name="description" content="Check out some of my recent copywriting projects." />
        <meta name="keywords" content="ui/ux design, copywriting, ux writing, content design, marketing, liam naylor" />
      </Head>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <FontAwesomeIcon icon={faPenToSquare} size="4x" className="mb-5 text-blue-500" />
        <h2 className="text-4xl pb-2 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-tight sm:text-6xl">
          Copywriting
        </h2>
        <p className="mt-6 text-lg leading-8">
          Check out my latest writing projects below:
        </p>
      </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" className={"hover:text-blue-500"}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse hover:bg-gray-200 p-5">
                <ProjectCTA url={stat.url}>{stat.cta}</ProjectCTA>
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
