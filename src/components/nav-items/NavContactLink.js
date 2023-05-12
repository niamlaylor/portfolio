export default function NavContactLink( { children } ) {
  const linkClass = "text-black text-sm ml-1 mr-2 font-semibold";
  return (
    <>
      { children === 'Github' && <>
        <img
          src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/github-mark.png'}
          width={20}
          height={20}
        />
        <a 
          href="https://github.com/niamlaylor" 
          target="_blank" 
          className={linkClass}
        >
          {children}
        </a>
      </>
      }
      { children === 'LinkedIn' && 
      <>
        <img
          src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/linkedin-web.png'}
          width={20}
          height={20}
        />
        <a 
          href="https://www.linkedin.com/in/liamnnaylor/" 
          target="_blank" 
          className={linkClass}
        >
          {children}
        </a>
      </>
      }
      { children === 'Medium' && 
      <>
        <img
          src={'https://miro.medium.com/v2/resize:fill:176:176/1*sHhtYhaCe2Uc3IU0IgKwIQ.png'}
          width={20}
          height={20}
          className="rounded-full"
        />
        <a 
          href="https://medium.com/@liamnaylorr" 
          target="_blank" 
          className={linkClass}
        >
          {children}
        </a>
      </>
      }
    </>
  )
};