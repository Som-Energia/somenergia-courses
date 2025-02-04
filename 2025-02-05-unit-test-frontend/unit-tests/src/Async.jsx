import { useState } from 'react'

function Async() {
    const [value, setValue] = useState('init')

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 100);
    });

    const handleCount = async () => {
        const result = await  myPromise
        setValue(result)
  }

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => handleCount()}>
                    CLICK ME!
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                { value }
            </p>
        </>
    )
}

export default Async
