import { useState, useEffect } from 'react';
import "./Home.css"
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
    }, []);

    return (
        <div className="container">
            <div className="table-container">
                <p className="heading">You can view your player details here</p>
                <table className="player-table">
                    <thead>
                        <tr>
                            {header.map((item, index) => (
                                <th key={index}>{item.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((item, index) => (
                            <tr key={index}>
                                {header.map((head, headIndex) => (
                                    <td key={headIndex}>{item[head]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="auction-btn">Go To Auction</button>
        </div>
    );
};

export default Home;
