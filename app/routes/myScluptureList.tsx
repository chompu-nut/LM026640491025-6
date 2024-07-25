import { useState } from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [ sctList, setSctList]= useState( sculptureList);

    let sculpture = sculptureList[index];

    function handleClickNext() {
        setIndex((index) => (index + 1) % sculptureList.length);
    }

    function handleClickBack() {
        setIndex((index) => (index - 1 + sculptureList.length) % sculptureList.length);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    onClick={handleClickBack}
                    className="bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </button>
                <button
                    onClick={handleClickNext}
                    className="bg-green-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    Next
                </button>
            </div>
            <div className="text-center mt-4">
                <h2>
                    <i>{sculpture.name}</i> โดย {sculpture.author}
                </h2>
                <h3>
                    ({index + 1} จาก {sculptureList.length})
                </h3>
                <img
                    src={sculpture.url}
                    alt={sculpture.name}
                    title={sculpture.name}
                    className="mt-4 max-w-full h-auto"
                />
                <p className="mt-2">
                    {sculpture.description}
                </p>
                <a
                    href={sculpture.reference}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-blue-200 hover:underline"
                >
                    เอกสารอ้างอิงฉบับเต็ม
                </a>
            </div>
        </div>
    );
}
