export default function Navigation() {
  return (
    <nav className="bg-custom-white py-10 px-8">
      <div className="container mx-auto flex items-center justify-center">
        <a href="/" className="text-black tracking-nav-wide lg:text-h1 md:text-h1-tablet sm:text-h1-mobile font-semibold">Liam Naylor</a>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <a href="/copywriting" className="text-black text-lg font-semibold">Copywriter</a>
        <a href="/development" className="text-black text-lg font-semibold">Developer</a>
      </div>
      <div className="container mx-auto mt-3 flex items-center justify-center">
        <a href="https://github.com/niamlaylor" target="_blank" className="text-black text-sm font-semibold">Github</a>
        <a href="https://www.linkedin.com/in/liamnnaylor/" target="_blank" className="text-black text-sm font-semibold">LinkedIn</a>
        <a href="/development" className="text-black text-sm font-semibold">Email me</a>
      </div>
    </nav>
  )
};