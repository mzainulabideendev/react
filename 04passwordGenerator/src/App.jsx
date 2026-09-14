import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(true);
  const [characters, setCharacters] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // Generate Password
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numbers, characters]);

  // Copy Password
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, characters, generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">
        
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-3 py-2 rounded-l-lg bg-gray-700 text-white outline-none"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white font-semibold transition"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="text-white block mb-2">
            Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center justify-between mb-2">
          <label className="text-white flex items-center gap-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="text-white flex items-center gap-2">
            <input
              type="checkbox"
              checked={characters}
              onChange={() => setCharacters((prev) => !prev)}
            />
            Include Symbols
          </label>
        </div>

        {/* Regenerate Button */}
        <button
          onClick={generatePassword}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;