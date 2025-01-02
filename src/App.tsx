import "./App.css";
import CharacterComponent from "./components/CharacterComponent/CharacterComponent.tsx";
import { simpsons } from "./components/data.ts";

interface Simpson {
  name: string;
  surname: string;
  age: number;
  info: string;
}

function App() {
  return (
    <>
      {simpsons.map((el: Simpson) => {
        console.log(el);
        return (
          <CharacterComponent key={el.name}>
            <h2 className="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">
              {el.name} {el.surname}
            </h2>
            <p>{el.age}</p>
            <p>{el.info}</p>
          </CharacterComponent>
        );
      })}
    </>
  );
}

export default App;
