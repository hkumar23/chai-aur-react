import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(8);
  let [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  let [isCharAllowed, setIsCharAllowed] = useState(false);
  let passwordRef = useRef();

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isCharAllowed) str += "!@#$%^&*-_+=[]{}~`";
    if (isNumbersAllowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let randIdx = Math.floor(Math.random() * str.length);
      pass += str[randIdx];
    }

    setPassword(pass);
  }, [length, isNumbersAllowed, isCharAllowed]);

  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumbersAllowed, isCharAllowed]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg 
      px-4 py-3 my-8 text-orange-500 bg-gray-800"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 px-2 py-1 text-white text-lg font-semibold cursor-pointer"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                // console.log(e.target.value);
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumbersAllowed}
              id="numberInput"
              onClick={() => {
                setIsNumbersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="charInput"
              onClick={() => {
                setIsCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
