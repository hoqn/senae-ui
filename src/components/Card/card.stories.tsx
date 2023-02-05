import { StoryFn, type Meta } from "@storybook/react";
import React from "react";
import Button from "../Button";
import Card, { CardProps, CardContent } from "@/components/Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

const DummyContent = () => <p>더미 콘텐츠입니다.</p>;

export const Simple = Template.bind({});
Simple.args = {
  children: (
    <>
      <CardContent.Head>
        <CardContent.HeadTitle>Hello</CardContent.HeadTitle>
        <CardContent.HeadSubtitle>Hello</CardContent.HeadSubtitle>
      </CardContent.Head>
      <CardContent.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi
          tellus, rutrum quis felis quis, ullamcorper placerat sem. Nulla
          facilisi. Maecenas volutpat euismod tempor. Ut non nibh nec sem
          volutpat pellentesque ut nec ligula. Fusce est sem, mattis ut lectus
          sit amet, imperdiet porttitor ipsum. Vestibulum finibus est feugiat
          erat tristique aliquet. In in libero id leo auctor molestie facilisis
          id risus.
        </p>
      </CardContent.Body>
      <CardContent.Footer>
        <CardContent.FooterInnerGroup end>
          <Button variant="primary" label="Submit" />
        </CardContent.FooterInnerGroup>
      </CardContent.Footer>
    </>
  ),
} as CardProps;
