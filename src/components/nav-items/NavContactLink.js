import NavContactLinkItem from "./NavContactLinkItem";

export default function NavContactLink( { children } ) {
  return (
    <>
      { children === 'Github' && 
      <>
        <NavContactLinkItem
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/github-mark.png"}
          href={"https://github.com/niamlaylor"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
      { children === 'LinkedIn' && 
      <>
        <NavContactLinkItem
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/linkedin-web.png"}
          href={"https://www.linkedin.com/in/liamnnaylor/"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
      { children === 'Medium' && 
      <>
        <NavContactLinkItem
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/medium-logo.png"}
          href={"https://medium.com/@liamnaylorr"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
    </>
  )
};