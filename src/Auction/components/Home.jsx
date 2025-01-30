import { useState, useEffect } from 'react';

const Home = () => {

    const [players, setPlayers] = useState([]);
    const [header, setHeader] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/players")
        .then((res) => res.json())
        .then((data) => {
            setPlayers(data);
            setHeader(Object.keys(data[0]));
    });
    }, [])

    return (
        <>
            <p>you can view your player details here</p>
            <div className="App">
                <table>
                    <thead>
                        {header.map((item, index) => {
                            return <th key={index}>{item.toUpperCase()}</th>;
                        })}
                    </thead>
                    <tbody>
                        {players.map((item, index) => {
                            return (
                                <tr key={index}>
                                    {header.map((head, headIndex) => {
                                        return <td key={headIndex}>{item[head]}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Home;