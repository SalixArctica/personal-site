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

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 1rem;
  overflow: hidden;
`

const PageContainer = styled.div`
  margin: 0 30rem;
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

export const PageLayout = ({title, children}) => {
  return (
    <PageContainer>
      <Col>
        <Title>{title}</Title>
        <ScrollCol>
        {children}
        </ScrollCol>
      </Col>
    </PageContainer>
  )
}