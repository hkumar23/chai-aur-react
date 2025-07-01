import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightblue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("Green");
            }}
            className=" rounded-2xl px-2 pb-1 text-xl font-semibold cursor-pointer"
            style={{
              backgroundColor: "Green",
            }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("Blue");
            }}
            className="rounded-2xl px-2 pb-1 text-xl font-semibold cursor-pointer"
            style={{
              backgroundColor: "blue",
            }}
          >
            Blue
          </button>
          <button
            onMouseOver={() => {}}
            onClick={() => {
              setColor("blueviolet");
            }}
            className="rounded-2xl px-2 pb-1 text-xl font-semibold cursor-pointer"
            style={{
              backgroundColor: "blueviolet",
            }}
          >
            Blueviolet
          </button>
          <button
            onClick={() => {
              setColor("lightblue");
            }}
            className="rounded-2xl px-2 pb-1 text-xl font-semibold cursor-pointer"
            style={{
              backgroundColor: "lightblue",
            }}
          >
            Lightblue
          </button>
          <button
            onClick={() => {
              setColor("darkgray");
            }}
            className="rounded-2xl px-2 pb-1 text-xl font-semibold cursor-pointer"
            style={{
              backgroundColor: "darkgray",
            }}
          >
            Darkgray
          </button>
          <button
            onClick={() => {
              setColor("orchid");
            }}
            className="rounded-2xl px-2 pb-1 text-xl font-semibold cursor-pointer"
            style={{
              backgroundColor: "orchid",
            }}
          >
            Orchid
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
