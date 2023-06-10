import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BcfWebsite() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-500">BC Ferries Vacations</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Content design for a travel package booking site</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">The new BC Ferries Vacations platform </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:w-[40rem]" src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/bcfv-home-widget.jpg" alt="" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mb-2">BC Ferries Vacations offers a wide selection of travel packages that pair ferry travel with hotels and activities.</p>
              <p>In 2020, our team launched a new booking website for BC Ferries Vacations - complete with hundreds of west-coast hotels, activities and curated vacation packages. Think Expedia, with ferries.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">My role</h2>
              <ul role="list" className="mt-6 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-lg text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">Hotel and activity content:</strong> Wrote concise copy for hundreds of hotels and activities to help customers evaluate their accommodation options.</span>
                </li>
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">UX writing for booking flow:</strong> Wrote microcopy for the end-to-end booking experience.</span>
                </li>
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">Email design and copy:</strong> Designed and wrote email templates for booking confirmations, pre-travel reminders, waitlists requests and more.</span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Creating a world-class travel experience</h2>
              <p className="mt-6 mb-2">As a growing business, BC Ferries Vacations needed a modern and scalable booking platform that would allow tourists from all over the world to experience its unique travel offerings.</p>
              <p>With a similar mobile-first style to the <a href="/copywriting/bcf-website" className="hover:underline text-blue-700">BC Ferries website</a>, my writing style focused on being as concise as possible, without sacrificing clarity. The majority of customers using this website are not local, so they rely on effective copywriting to guide them in the right direction.</p>
            </div>
            <a href="https://www.bcferries.com/vacations" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Visit BC Ferries Vacations &nbsp; <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}