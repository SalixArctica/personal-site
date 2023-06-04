import styled from "styled-components";
import { PageLayout } from "../components/LayoutComps";
import { Anchor } from "../components/Link";

const DetailTag = styled.p`
  margin: 0;
  text-align: left;
`

const Details = styled.div`
  justify-self: flex-start;
  align-self: flex-start;
`

export default function About() {
  return (
    <PageLayout title="Willow Lancaster">
      <Details>
        <DetailTag>Species: Human</DetailTag>
        <DetailTag>Pronouns: she/they</DetailTag>
        <Anchor href="https://github.com/SalixArctica"><DetailTag>Github</DetailTag></Anchor>
        <Anchor href="mailto: willow@salixcircuits.com"><DetailTag>willow@salixcircuits.com</DetailTag></Anchor>
        <Anchor href="https://www.linkedin.com/in/willowlancaster/"><DetailTag>LinkedIn</DetailTag></Anchor>
      </Details>
      <p>I'm a software engineer by trade. I've been messing around with computers since I started modding Halo as a teenager. I studied computer science at Northeastern State University but left the program to start freelancing. I've worked at Mux and JB Hunt as an engineer. Along with various freelance and side projects.</p>
      <p>I got in to Eurorack synthesizers during the Covid pandemic and started dabling in DIY modules. I briefly entertained the idea of selling these modules which resulted in this sites name. I've also done some PCB design around home flight sim cockpits.</p>
      <p>When I'm not messing with software or circuits I can typically be found playing video games with my friends, hiking, flying around in a sim, or playing music.</p>
    </PageLayout>
  )
}
