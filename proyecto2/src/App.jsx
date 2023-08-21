import { Children, useState } from 'react'
import './App.css'

const TURNO = {
  X: 'x',
  O: 'o'
}

const Cuadrado = ({ updateBoard, Children, index, isSelected }) => {
  const vClassName = `square ${isSelected? 'is-selected': ''}`;
  const handlerClick = () =>{
    updateBoard(index)
  }

  return (    
    <div className={vClassName} onClick={handlerClick}>
      {Children}
    </div>  
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNO.X)


  const updateBoard = (index) => {
    const newBoard = [...board];
    if (newBoard[index]) return;
    newBoard[index] = turno;
    newTurno = turno === TURNO.X? TURNO.O : TURNO.X;
    setTurno(newTurno);
    setBoard(newBoard);
  }

  return (
    <main className='board'>
      <h1>Ta-Te-Ti</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            {console.log('dentro del map')}
            <Cuadrado 
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {board[index]}
            </Cuadrado>
          })
        }
      </section>
      <section className='turn'>
        <Cuadrado isSelected={turno===TURNO.X}>{TURNO.X}</Cuadrado>
        <Cuadrado isSelected={turno===TURNO.Y}>{TURNO.O}</Cuadrado>
      </section>
    </main>  
  )
}

export default App
