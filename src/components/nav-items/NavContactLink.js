import NavContactLinkItem from "./NavContactLinkItem";

export default function NavContactLink( { children } ) {
  return (
    <>
      { children === 'Github' && 
      <>
        <NavContactLinkItem
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/github-mark.png"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
      { children === 'LinkedIn' && 
      <>
        <NavContactLinkItem
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/linkedin-web.png"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
      { children === 'Medium' && 
      <>
        <NavContactLinkItem
          url={"https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/medium-logo.png"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
    </>
  )
};