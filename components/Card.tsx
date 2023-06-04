import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div<{hasLink: boolean}>`
  border: 1px solid white;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  &:hover {
    & > img {
      filter: grayscale(0%) !important;
    }

    ${({hasLink}) => hasLink && css`
      & > * > h1 {
        text-decoration: underline;
      }  
    `}
    
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

type CardProps = {
  children: any,
  href?: string,
  img?: string,
}

const InnerCard = ({children, href, img = "https://placehold.co/300x200"}: CardProps) => {
  return (
    <CardContainer hasLink={!!href}>
      <Img src={img} alt="placeholder"/>
      <Content>
        {children}
      </Content>
    </CardContainer>
  );
}

const Card = ({children, href, img = "https://placehold.co/300x200"}: CardProps) => {
  if(!!href) {
    return (
      <a href={href}>
        <InnerCard href={href} img={img}>{children}</InnerCard>
      </a>
    )
  }

  return <InnerCard img={img}>{children}</InnerCard>

}

export default Card;