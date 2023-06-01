import styled from 'styled-components'
import Link from 'next/link'

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;

  border: 1px solid white;
  padding: 1rem;
  border-radius: 1rem;

  transition: all .1s ease-in-out;

  &:hover {
    -webkit-text-stroke: 5px white;
    color: pink;
  }
`

const StyledLink = ({ href, children }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{children}</StyledA>
  </Link>
)

export default StyledLink
