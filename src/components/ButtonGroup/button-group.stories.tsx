import React from "react";

import { type Meta, type StoryFn } from "@storybook/react";
import ButtonGroup, { ButtonGroupProps } from "./button-group";
import Button from "../Button/button";
import { WTColorTypeComposed } from "@/theming/types/tcolor";
import { makeTColorTypeComposed } from "@/theming/factory";

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

const cancleTint: WTColorTypeComposed = makeTColorTypeComposed("#d13715");

export const Example1 = Template.bind({});
Example1.args = {
  children: (
    <>
      <Button variant="primary" label="Delete" tint={cancleTint} />
      <Button variant="normal" label="Share" />
      <Button variant="primary" label="Save" />
    </>
  ),
} as ButtonGroupProps;

export const Example2 = Template.bind({});
Example2.args = {
  children: (
    <>
      <Button variant="ghost" label="Share" />
      <Button variant="primary" label="Save" />
    </>
  ),
} as ButtonGroupProps;
