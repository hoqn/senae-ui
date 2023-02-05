import React from "react";

import { type Meta, type StoryFn } from "@storybook/react";
import Button, { type ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  variant: "normal",
  label: "Normal Button",
} as ButtonProps;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary Button",
} as ButtonProps;

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  label: "Ghost Button",
} as ButtonProps;

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  label: "Text Button",
} as ButtonProps;
