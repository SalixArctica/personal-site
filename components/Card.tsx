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
  }
`

const Img = styled.img`
  border-radius: 1rem 0 0 1rem;
  width: 300px;
  height: 200px;
  
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

const Card = ({children, img = "https://placehold.co/300x200"}) => {
  return (
    <CardContainer>
      <Img src={img} alt="placeholder"/>
      <Content>
        {children}
      </Content>
    </CardContainer>
  )
}

export default Card;