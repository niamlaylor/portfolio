import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BcfWebsite() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Head>
        <title>BC Ferries Website | Liam Naylor</title>
        <meta name="description" content="See how I helped launch the BC Ferries website through strong copywriting and content design." />
        <meta name="keywords" content="ui/ux design, copywriting, ux writing, website" />
      </Head>
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-500">BC Ferries</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Website content design and UX writing</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">Originally launched in 2006, the BC Ferries website is a critical tool for millions of British Columbians and tourists to book, plan and manage their ferry travel.</p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image 
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]" 
            src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/bc-ferries-inside-passage-center-WEB.jpg" 
            alt=""
            width={300}
            height={150}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mb-2">Our team led a complete redesign of the BC Ferries website from the ground up, including a reimagined booking experience, better organized web content, an &quot;Expedia-like&quot; travel package booking service for BC Ferries Vacations, and more.</p>
              <p>The original website had an out-of-date design that was a pain to use on a mobile device, so our strategy was to create a crisp and concise layout with a mobile-first, responsive layout. The new website launched in the fall of 2020 and has processed billions of dollars in transactions since.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">My role</h2>
              <ul role="list" className="mt-6 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-lg text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">Content design & SEO:</strong> I led a complete revamp of our corporate voice and tone and condensed more than 4300 pages on our old website down to ~400 concise and SEO-friendly pages.</span>
                </li>
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">UX writing:</strong> I wrote data-driven microcopy, transactional emails, promotional content and more, to improve user engagement and streamline the user journey. My involvement played a key role in achieving more than a 30% increase in customer satisfaction scores on our website in the year following launch.</span>
                </li>
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">Ensure consistency:</strong> I focused on maintaining a coherent and consistent brand voice across all website content. My aim was to ensure a seamless and engaging customer experience that builds trust and fosters customer loyalty.</span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Reimagined voice and tone</h2>
              <p className="mt-6 mb-2">For years, BC Ferries used a more rigid tone when communicating with customers. As a copywriter leading content development on the new website, my role was to champion a more human voice and tone company-wide, and ensure consistency across all of our digital touchpoints.</p>
              <p>Due to the intricacies of their business, BC Ferries also has highly complex business rules and operational procedures. My biggest challenge on this project was fully understanding these complexities and translating it into clear and concise content for our B2C and B2B customer base. My approach was to break down complicated procedures into simple, easy-to-understand steps. This resulted in a more accessible and user-friendly website that resonates with BC Ferries&apos; diverse customer base.</p>
            </div>
            <Link href="https://www.bcferries.com" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700">
              Visit the BC Ferries website &nbsp; <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
            </Link>
            <p className="mt-3 text-gray-500 text-xs"><i>And maybe book a sailing or two... </i>⛴</p>
          </div>
        </div>
      </div>
    </div>
  )
}