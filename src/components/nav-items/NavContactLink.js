import Link from "next/link";
import Image from "next/image";

export default function NavContactLink( { children } ) {
  const linkClass = "text-black text-sm ml-1 mr-2 font-semibold";
  return (
    <>
      { children === 'Github' && 
      <>
        <Link href="https://github.com/niamlaylor" target="_blank">
          <div className="flex flex-row">
            <Image 
              src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/github-mark.png'}
              width={20}
              height={20}
              alt="Liam Naylor Github link"
            />
            <p className={`${linkClass} flex`}>
              {children}
            </p>
          </div>
        </Link>
      </>
      }
      { children === 'LinkedIn' && 
      <>
        <Link href="https://www.linkedin.com/in/liamnnaylor" target="_blank">
          <div className="flex flex-row">
            <Image 
              src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/linkedin-web.png'}
              width={20}
              height={20}
              alt="Liam Naylor LinkedIn link"
            />
            <p className={`${linkClass} flex`}>
              {children}
            </p>
          </div>
        </Link>
      </>
      }
      { children === 'Medium' && 
      <>
        <Link href="https://medium.com/@liamnaylorr" target="_blank">
          <div className="flex flex-row">
            <Image 
              src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/medium-logo.png'}
              width={20}
              height={20}
              className={"rounded-full"}
              alt="Liam Naylor Medium link"
            />
            <p className={`${linkClass} flex`}>
              {children}
            </p>
          </div>
        </Link>
      </>
      }
    </>
  )
};