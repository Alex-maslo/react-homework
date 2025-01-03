import { FC, ReactNode } from "react";

interface CharacterComponentProps {
  children: ReactNode;
}

const CharacterComponent: FC<CharacterComponentProps> = ({ children }) => {
  return (
    <div className="p-3 border shadow  border-blue-100 rounded-xl">
      <div>{children}</div>
    </div>
  );
};

export default CharacterComponent;
