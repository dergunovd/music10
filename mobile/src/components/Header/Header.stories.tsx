import React from "react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const Default = Template.bind({
  text: "Выберите плейлист",
  nav: [<a href="#">Link 1</a>, <a href="#">Link 2</a>],
});
/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore
Default.args = {
  text: "Выберите плейлист",
  nav: [<a href="#">Link 1</a>, <a href="#">Link 2</a>],
};
