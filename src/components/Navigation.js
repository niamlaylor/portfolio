export default function Navigation() {
  return (
    <nav className="bg-custom-white py-10 px-8">
      <div className="container mx-auto flex items-center justify-center">
        <a href="/" className="text-black tracking-nav-wide text-h1 font-semibold">Liam Naylor</a>
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <a href="/copywriting" className="text-black text-lg font-semibold">Copywriter</a>
        <a href="/development" className="text-black text-lg font-semibold">Developer</a>
      </div>
    </nav>
  )
};