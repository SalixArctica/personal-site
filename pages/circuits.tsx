import Card from "../components/Card";
import { Col, PageLayout } from "../components/LayoutComps";

const Software = () => {
  return (
    <PageLayout title="Circuits I've Made">
      <Card img="FCU.png" href="https://oshwlab.com/salixarctica/autopilot">
        <h1>A320 FCU</h1>
        <p>A to-scale flight control unit for the Airbus A320, built to use with MobiFlight and Microsoft Flight Sim. Project WIP.</p>
      </Card>
      <Card img="quadvca.png" href="https://oshwlab.com/SalixArctica/quad-vca">
        <h1>Quad VCA</h1>
        <p>4 channel voltage controlled amplifier for Eurorack Synthesizers. It's a nice utility module and offered a step up in complexity and utility from the mixer</p>
      </Card>
      <Card img="mixer.png" href="https://oshwlab.com/SalixArctica/mixer-schematic">
        <h1 >Simple Mixer</h1>
        <p>A dead simple 4 channel mixer for Eurorack Synthesizers. My first forray into PCB/Circuit Design</p>
      </Card>
    </PageLayout>
  );
}

export default Software;