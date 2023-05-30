export default function Languages() {
  return (
    <div className="flex flex-row mt-7 border border-gray-300 rounded-lg p-6">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/js-gs.jpg"
          loading="lazy"
          className="rounded-tl-lg h-10"
        />
        <span className="text-xs mt-1">JavaScript</span>
      </div>
      <div className="flex flex-col items-center text-center ml-3">
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/rb-gs.jpg"
          loading="lazy"
          className="h-10"
        />
        <span className="text-xs mt-1">Ruby</span>
      </div>
      <div className="flex flex-col items-center text-center ml-3">
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/html-gs.jpg"
          loading="lazy"
          className="h-10"
        />
        <span className="text-xs mt-1">HTML</span>
      </div>
      <div className="flex flex-col items-center text-center ml-3">
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/css-gs.jpg"
          loading="lazy"
          className="h-10"
        />
        <span className="text-xs mt-1">CSS</span>
      </div>
    </div>
  );
}
