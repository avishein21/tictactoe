import React, {useState} from 'react';
import './tictac.css';


const Tictac = () => {

    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState('');
    const [cells, setCells] = useState(Array(9).fill(''));


    const reset = () =>{
        setCells(Array(9).fill(''));
        setWinner('');
    }


    const checkWin = (squares) => {
        let winG = false;
        let draw = false;
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diag: [
                [0,4,8],
                [2,4,6]
            ]
        };
        for(let combo in combos){
            combos[combo].forEach ((pattern) => {
                if(!(squares[pattern[0]] === '') &&
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]) {
                    setWinner(squares[pattern[0]] + " is the winner!")
                    winG = true;
                } 
            });
        }
        if(!winG){
            for (let space in squares){
                if((squares[space] === '')){
                    return;
                }
            }
            setWinner("It is a Draw!")

        }
    }


    const handleClick = (num) => {
        let squares = [...cells];
        if (winner){
            return;
        } else if(cells[num] !== ''){
            return;
        }
        if (turn === 'X'){
            squares[num] = 'X';
            setTurn('O');
        } else {
            squares[num] = 'O';
            setTurn('X');
        }
        checkWin(squares);
        setCells(squares);
    }

    const Cell = ({num}) =>{
        return <td onClick={() => handleClick(num)}> {cells[num]} </td>
    }

    return (
    <div className='container'>
        <h1> Play Tic Tac Toe </h1>
        <table>
        Turn: {turn}
            <tbody>
                <tr>
                    <Cell num= {0}/>
                    <Cell num= {1}/>
                    <Cell num= {2}/>
                </tr>
                <tr>
                    <Cell num= {3}/>
                    <Cell num= {4}/>
                    <Cell num= {5}/>
                </tr>
                <tr>
                    <Cell num= {6}/>
                    <Cell num= {7}/>
                    <Cell num= {8}/>
                </tr>
            </tbody>
        </table>
        {winner && (
            <>
            <h2> {winner} </h2>
            <button onClick = {() => reset()}> Play Again </button>
            </>
        )}
       

    </div>
  )
}

export default Tictac