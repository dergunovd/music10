import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template = () => <Header text="Жанр" />;

export const Default = Template.bind({});
