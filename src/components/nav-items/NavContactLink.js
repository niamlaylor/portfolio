export default function NavContactLink( { children } ) {
  const linkClass = "text-black text-sm ml-1 mr-2 font-semibold";
  return (
    <>
      { children === 'Github' && <>
        <a 
          href="https://github.com/niamlaylor" 
          target="_blank" 
          className={`${linkClass} flex`}
        >
          <img
          src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/github-mark.png'}
          width={20}
          height={20}
          className={"mr-1"}
        />
          {children}
        </a>
      </>
      }
      { children === 'LinkedIn' && 
      <>
        <a 
          href="https://www.linkedin.com/in/liamnnaylor/" 
          target="_blank" 
          className={`${linkClass} flex`}
        >
          <img
          src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/linkedin-web.png'}
          width={20}
          height={20}
          className={"mr-1"}
        />
          {children}
        </a>
      </>
      }
      { children === 'Medium' && 
      <>
        <a 
          href="https://medium.com/@liamnaylorr" 
          target="_blank" 
          className={`${linkClass} flex`}
        >
          <img
          src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/medium-logo.png'}
          width={20}
          height={20}
          className="rounded-full mr-1"
        />
          {children}
        </a>
      </>
      }
    </>
  )
};