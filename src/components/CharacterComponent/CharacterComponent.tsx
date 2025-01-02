import "./CharacterComponent.css";
import "../../index.css";
import { FC, ReactNode } from "react";

interface CharacterComponentProps {
  children: ReactNode;
}

const CharacterComponent: FC<CharacterComponentProps> = ({ children }) => {
  return (
    <div className="card border-2 border-orange-700 rounded-lg">
      <div>{children}</div>
    </div>
  );
};

export default CharacterComponent;
