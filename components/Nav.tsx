import styled from "styled-components";

import Link from 'next/link'

const NavContainer = styled.nav`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;

  @media (min-width: 1900px) {
    margin: 0 20vw;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
`

const StyledA = styled.a`

  transition: .1s ease-in-out;

  &:hover {
    font-weight: bold;
  }  
`


const Nav = () => {
  return (
    <NavContainer>
      
      <Link href={'/'} passHref legacyBehavior>
      <a><h1>salix circuits</h1></a>
      </Link>
      <Links>
      <Link href={'/software'} passHref legacyBehavior>
        <StyledA>Software</StyledA>
      </Link>
      <Link href={'/circuits'} passHref legacyBehavior>
        <StyledA>Circuits</StyledA>
      </Link>
      <Link href={'/about'} passHref legacyBehavior>
        <StyledA>About</StyledA>
      </Link>
      </Links>
    </NavContainer>
  )
}

export default Nav;