import {useState} from "react";
import _ from "lodash";
import {nanoid} from "nanoid";
import './app.css'

function App() {
    const [state, setState] = useState([
        {
            id: nanoid(),
            link: './images/1.jpeg'
        },
        {
            id: nanoid(),
            link: './images/2.jpeg'
        },
        {
            id: nanoid(),
            link: './images/3.jpeg'
        },
        {
            id: nanoid(),
            link: './images/4.jpeg'
        },
        {
            id: nanoid(),
            link: './images/5.jpeg'
        },
        {
            id: nanoid(),
            link: './images/6.jpeg'
        },
        {
            id: nanoid(),
            link: './images/7.jpeg'
        },
        {
            id: nanoid(),
            link: './images/8.jpeg'
        },
        {
            id: nanoid(),
            link: './images/9.jpeg'
        },
        {
            id: nanoid(),
            link: './images/10.jpeg'
        },
        {
            id: nanoid(),
            link: './images/11.jpeg'
        },
        {
            id: nanoid(),
            link: './images/12.jpeg'
        },
    ]);
    const [card, setCard] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const reset = () => {
        setCard([]);
        setScore(0);
        if (score> bestScore) setBestScore(score)
    }

    const handleClick = (e) => {
        if (card.length === 12){
            reset();
            alert('You Win!')
        }else if (card.includes(e.target.id)) {
            reset();
            alert('Your score is ' + score);
        } else {
            setCard([...card, e.target.id]);
            setScore(score+1);
        }
        setState(_.shuffle(state));
    }

    const display = () => {
        return (
            state.map(e => {
                return (
                    <div key={e.id} onClick={handleClick}>
                        <img src={e.link} id={e.id} alt=""/>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            <h1>Memory Card</h1>
            <div className='header'>
                <div>Score: {score}</div>
                <div>Best: {bestScore}</div>
            </div>
            <div className='container'>{display()}</div>
        </div>
    )
}

export default App;
