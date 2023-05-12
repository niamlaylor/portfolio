export default function NavContactLink( { children } ) {
  const linkClass = "text-black text-sm ml-1 mr-1 font-semibold";
  return (
    <>
      { children === 'Github' && <>
        <a 
          href="https://github.com/niamlaylor" 
          target="_blank" 
          className={linkClass}
        >
          {children}
        </a>
      </>
      }
      { children === 'LinkedIn' && <a 
        href="https://www.linkedin.com/in/liamnnaylor/" 
        target="_blank" 
        className={linkClass}
      >
        {children}
      </a>
      }
    </>
  )
};