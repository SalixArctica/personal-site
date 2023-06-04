import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid white;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  &:hover {
    & > img {
      filter: grayscale(0%) !important;
    }

    & > * > h1 {
      text-decoration: underline;
    }
  }
`

const Img = styled.img`
  border-radius: 1rem 0 0 1rem;
  width: 300px;
  height: 200px;

  object-fit: cover;
  object-position: center;
  
  filter: grayscale(70%);

  
  transition: .3s filter ease-in-out;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > h1 {
    margin: 0;
  }
`

const Card = ({children, href, img = "https://placehold.co/300x200"}) => {
  return (
    <a href={href}>
      <CardContainer>
        <Img src={img} alt="placeholder"/>
        <Content>
          {children}
        </Content>
      </CardContainer>
    </a>
  )
}

export default Card;