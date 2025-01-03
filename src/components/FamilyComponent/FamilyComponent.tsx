import { ISimpson, simpsons } from "../data.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
import { FC } from "react";

const FamilyComponent: FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {simpsons.map(({ name, surname, age, info, photo }: ISimpson) => {
        return (
          <CharacterComponent key={name}>
            <div className="grid grid-cols-[1fr,6fr] gap-4">
              <div>
                <img
                  className="object-contain h-48 w-96"
                  src={photo}
                  alt={name}
                />
              </div>
              <div>
                <h1 className="text-blue-600 text-2xl font-semibold mb-4">
                  {name} {surname}, {age} {age === 1 ? "рік" : "років"}
                </h1>
                <p className={"text-gray-600"}> {info}</p>
              </div>
            </div>
          </CharacterComponent>
        );
      })}
    </div>
  );
};

export default FamilyComponent;
