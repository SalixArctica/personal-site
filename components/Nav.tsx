import styled from "styled-components";

import Link from 'next/link'

const NavContainer = styled.nav`
  width: 100%;
  top: 0;
  position: fixed;
`

const NavInner = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  @media (min-width: 720px) {
    margin: 0 1rem;
  }
  @media (min-width: 1100px) {
    margin: 0 5rem;
  }
  @media (min-width: 1440px) {
    margin: 0 10rem;
  }
  @media (min-width: 1920px) {
    margin: 0 20rem;
  }
  @media (min-width: 2400px) {
    margin: 0 50rem;;
  }
`

const Spacer = styled.div`
  flex-grow: 1;
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
      <NavInner>
        <Link href={'/'} passHref legacyBehavior>
          <a><h1>salix circuits</h1></a>
        </Link>
        <Spacer />
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
      </NavInner>
    </NavContainer>
  )
}

export default Nav;