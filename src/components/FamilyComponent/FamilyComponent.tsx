import { simpsons } from "../data.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";

export interface ISimpson {
  name: string;
  surname: string;
  age: number;
  info: string;
}

const FamilyComponent = () => {
  return (
    <div className="grid gap-4 p-4 ">
      {simpsons.map(({ name, surname, age, info }: ISimpson) => {
        return (
          <CharacterComponent key={name}>
            <h1 className="text-2xl font-semibold">
              {name} {surname}, {age} {age === 1 ? "рік" : "років"}
            </h1>
            <p className="text-justify">{info}</p>
          </CharacterComponent>
        );
      })}
    </div>
  );
};

export default FamilyComponent;
