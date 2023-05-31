export default function Languages() {
  const logoMargin = "m-7";
  const logoSize = "h-20";

  return (
    <div className="flex flex-row mt-7 border border-gray-200 rounded-lg p-10 bg-gray-100">
      <div className={`flex flex-col ${logoMargin} items-center text-center`}>
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/js-gs.jpg"
          loading="lazy"
          className={`rounded-tl-lg ${logoSize}`}
        />
        <span className="text-xs mt-1">JavaScript</span>
      </div>
      <div className={`flex flex-col ${logoMargin} items-center text-center`}>
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/rb-gs.jpg"
          loading="lazy"
          className={`${logoSize}`}
        />
        <span className="text-xs mt-1">Ruby</span>
      </div>
      <div className={`flex flex-col ${logoMargin} items-center text-center`}>
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/html-gs.jpg"
          loading="lazy"
          className={`${logoSize}`}
        />
        <span className="text-xs mt-1">HTML</span>
      </div>
      <div className={`flex flex-col ${logoMargin} items-center text-center`}>
        <img
          src="https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/css-gs.jpg"
          loading="lazy"
          className={`${logoSize}`}
        />
        <span className="text-xs mt-1">CSS</span>
      </div>
    </div>
  );
}
