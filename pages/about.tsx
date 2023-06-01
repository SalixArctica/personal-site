import styled from "styled-components";
import Card from "../components/Card";
import { PageLayout } from "../components/LayoutComps";

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
        <DetailTag>Github</DetailTag>
        <DetailTag>willow@salixcircuits.com</DetailTag>
      </Details>
      <p>I'm a software engineer by trade. I've been messing around with computers since I started modding Halo as a teenager. I studied computer science at Northeastern State University but left the program to start freelancing. I've worked at Mux and JB Hunt as an engineer. Along with various freelance and side projects.</p>
      <p>I got in to Eurorack synthesizers during the Covid pandemic and started dabling in DIY modules. I briefly entertained the idea of selling these modules which resulted in this sites name. I've also done some PCB design around home flight sim cockpits.</p>
      <p>When I'm not messing with software or circuits I can typically be found hiking or playing music on my small collection of strange instruments.</p>
    </PageLayout>
  )
}
