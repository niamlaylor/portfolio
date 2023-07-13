export default function Terminal() {
  return (
    <div class="mt-12 w-full mx-auto">
      <div class="w-full shadow-lg subpixel-antialiased rounded h-64 bg-gray-100 border-gray-100 mx-auto">
        <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
          <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
          </div>
          <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
          </div>
          <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
          </div>
          <div class="mx-auto pr-16" id="terminaltitle">
            <p class="text-center text-sm">Tech Used</p>
          </div>

        </div>
        <div class="pl-1 pt-1 h-auto text-black font-sans text-s bg-transparent" id="console">
          <p class="pb-1">Loading Liam Intro...</p>
          <ul>
          </ul>
          <p class="pb-1">I&apos;m a full-stack developer and copywriter with experience writing for nine-figure SaaS websites and apps. I can produce clean and efficient code, write exceptional copy, and design gorgeous interfaces—a rare skillset.</p>
        </div>
      </div> 
    </div>
  )
}