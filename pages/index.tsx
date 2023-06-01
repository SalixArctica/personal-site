import StyledLink from '../components/Link'
import { PageLayout, Row } from '../components/LayoutComps'
import Card from '../components/Card'

export default function Home() {
  return (
    <PageLayout center>
        <Card img="logo.png">
          <h1>
            Hi, I'm Willow
          </h1>
          <p>
            I make stuff, specifically
          </p>
          <Row>
            <StyledLink href="/software">Software</StyledLink>
            <StyledLink href="/software">Circuits</StyledLink>
          </Row>
        </Card>
    </PageLayout>
  )
}
