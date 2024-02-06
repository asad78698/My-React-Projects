import React, { useState, useCallback, useEffect, useRef } from 'react';

const App = () => {
  const [length, setLength] = useState(6);
  const [acceptNumber, setAcceptNumber] = useState(false);
  const [acceptChar, setAcceptChar] = useState(false);
  const [password, setPassword] = useState("a^h1K;");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (acceptNumber) {
      str += "0123456789";
    }

    if (acceptChar) {
      str += "!@#$%^&*()_-+=<>?/{}";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, acceptNumber, acceptChar, setPassword]);

  const passwordRef = useRef(null)

  const copyToClickBoard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert('password copied')

  }


  useEffect(() => {
    passwordGenerator();
  }, [length, acceptNumber, acceptChar, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl text-white text-center my-10">Password Generator</h1>

      <div className="max-w-lg bg-gray-700 rounded-xl mx-auto p-5">
        <div className="h-auto rounded-lg">
          <input
            value={password}
            readOnly
            placeholder="Password"
            type="text"
            className="outline-none py-3 p-3 mx-auto rounded-sm w-3/4"
            ref={passwordRef}
          />
          <button onClick={copyToClickBoard} className="bg-orange-400 w-20 h-12 py-3 mx-auto rounded-sm">Copy</button>
        </div>
        <div className="m-3">
          <input
            type="range"
            max={100}
            min={6}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-red-600 mx-5">Range: {length}</label>

          <input
            type="checkbox"
            checked={acceptNumber}
            onChange={() => setAcceptNumber((prev) => !prev)}
          />
          <label className="mx-2 text-white">Allow Number</label>

          <input
            type="checkbox"
            checked={acceptChar}
            onChange={() => setAcceptChar((prev) => !prev)}
          />
          <label className="mx-2 text-white">Allow Character</label>
        </div>
      </div>
    </>
  );
};

export default App;
