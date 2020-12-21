import React from 'react';
import {Button, ButtonProps} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (props: ButtonProps) => (
  <Button
    onPress={() => {
      void 0;
    }}
    {...props}
    title="Button"
  />
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Primary.args = {primary: true};
// Primary.props = { primary: true };
