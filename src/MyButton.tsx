import { FC } from "react";

type MyButtonProps = { text: string };

const MyButton: FC<MyButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default MyButton;
