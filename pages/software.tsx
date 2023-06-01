import Card from "../components/Card";
import { Col, PageLayout } from "../components/LayoutComps";

const Software = () => {
  return (
    <PageLayout title="Software I've helped make">
      <Card img="mux.png">
        <h1>Mux Dashboard</h1>
        <p>I worked with Mux as part of the `Growth and Onboarding` and `Platform Experince: Video in Dashoard teams`. We created the component/design system for the dashboard and worked to make Mux's various APIs more accessbile.</p>
      </Card>
      <Card img="jb-hunt.jpeg">
        <h1 >JB Hunt 360</h1>
        <p>At JB Hunt I worked on the 360° application for managing contract services. In my time there, we paved the way for modernizing the application and making it capable of supporting new scenarios.</p>
      </Card>
      <Card img="garret-and-co.png">
        <h1>Garret & Company</h1>
        <p>Some of my earlier work. I helped Garret and Company get their own website up and running. It's mostly a portfolio website, but also features listings for their various real estate offerings</p>
      </Card>
      <Card img="new-hope.png">
        <h1>New Hope</h1>
        <p>A website for a family friend. With the main goal being enabling donations to the church throughout the covid pandemic. Has a simple events system and other information</p>
      </Card>
    </PageLayout>
  );
}

export default Software;