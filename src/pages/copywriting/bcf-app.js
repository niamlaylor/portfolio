import Heading2 from "@/components/headers/h2"

export default function BcfWebsite() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-500">BC Ferries</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">UX writing for an iOS/Android travel app</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">Launched in 2023, the BC Ferries app was designed for a faster booking experience.</p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:w-[40rem]" src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/bcf-app-centre-WEB.jpg" alt="" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mb-2">With overwhelming customer feedback calling for a more efficient way to book sailings and check travel information, our team designed a streamlined mobile app that allows users to preset their travel details so they don't have to re-enter it everytime they book.</p>
              <p>The app also features redesigned layouts for schedules and current conditions - two pillars of the BC Ferries website that customers have used for decades.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">My role</h2>
              <ul role="list" className="mt-6 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-lg text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">UX writing:</strong> Produced microcopy across the app in collaboration with UI/UX designers, including the booking flow, schedules, current conditions and more.</span>
                </li>
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">Writing promo content:</strong> Wrote and managed reviews of all web promotional content and app store creative.</span>
                </li>
                <li className="flex gap-x-3">
                  <p className="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    ✅
                  </p>
                  <span><strong className="font-semibold text-gray-900">User testing:</strong> Led user device testing and performing content updates in response to beta release feedback.</span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">A faster and more efficient experience</h2>
              <p className="mt-6 mb-2">Our goal with this app was to drastically reduce the number of user interactions required to make a booking and access travel information. Combined with the new travel preferences feature, Express Book allows users to book the next available sailing in a flash.</p>
              <p></p>
            </div>
            <a href="https://www.bcferries.com" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Try out the app
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}