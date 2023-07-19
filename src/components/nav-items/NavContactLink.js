import NavContactLinkItem from "./NavContactLinkItem";

export default function NavContactLink( { children } ) {
  return (
    <>
      { children === 'Github' && 
      <>
        <NavContactLinkItem
          url={"https://drive.google.com/uc?id=1KuZTEPSxxyfmjJOxIk__U0Q35Y2qdYKL"}
          href={"https://github.com/niamlaylor"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
      { children === 'LinkedIn' && 
      <>
        <NavContactLinkItem
          url={"https://drive.google.com/uc?id=1WR5oGV-I_oR4JNfFXDsjxux7b89Mven1"}
          href={"https://www.linkedin.com/in/liamnnaylor/"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
      { children === 'Medium' && 
      <>
        <NavContactLinkItem
          url={"https://drive.google.com/uc?id=1qEOgCiy5C39ymzVWFwBtuaQSO5L6zWgo"}
          href={"https://medium.com/@liamnaylorr"}
        >
          {children}
        </NavContactLinkItem>
      </>
      }
    </>
  )
};