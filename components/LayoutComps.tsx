import { ReactFragment, ReactNode } from "react";
import styled from "styled-components";

type RowProps = {
  justify?: 'space-between' | 'space-evenly' | 'center' | 'space-around'
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify || 'center'};
  gap: 1rem;
`

export const Col = styled.div<{center?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({center}) => center ? 'center' : 'flex-start'};
  width: 100%;
  height: 100%;
  gap: 1rem;
  overflow: hidden;
`

const PageContainer = styled.div`
  padding: 3rem 0;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  justify-self: flex-start;
  align-self: flex-start;
`

const ScrollCol = styled(Col)`
  overflow-y: auto;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 1rem 0;
`

const ContainerCol = styled(Col)`
  max-width: 100%;
  height: 100%;

  @media (min-width: 720px) {
    max-width: 70vw;
  }


  @media (min-width: 1100px) {
    max-width: 60vw;
  }

  @media (min-width: 1440px) {
    max-width: 50vw;
  }

  @media (min-width: 1920px) {
    max-width: 40vw;
  }

  @media (min-width: 2400px) {
    max-width: 30vw;
  }

`

export const PageLayout: React.FC<{title?: string, center?: boolean, children: ReactNode }> = ({title, center, children}) => {
  return (
    <PageContainer>
      <ContainerCol>
        <Title>{title}</Title>
        <ScrollCol center={center}>
        {children}
        </ScrollCol>
      </ContainerCol>
    </PageContainer>
  )
}