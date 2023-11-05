import React, { useState } from 'react'

const User = () => {
  let username = JSON.parse(localStorage.getItem("username"));
  const [chat,setChat] = useState(false)
  const [data,setdata] = useState("")

  return (
    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <div>
        Hey <span style={{fontWeight:"bolder"}}>{username}!</span> Nice To Meet You.
        <p>Want to know about Chess?</p>
        <button onClick={()=>setChat(!chat)}
          style={{backgroundColor:'teal', height:"30px",color:"whitesmoke"}}
          >
            {chat===true?<button>End Chat</button>:<button>Chat with me</button>}
        </button>
      </div>
      
      <div>
        {chat===true?
        <div>
          <h4>Chat With Us</h4>
          <div style={{minHeight:"320px",width:"570px",border:"1px solid black"}}>
            <p style={{marginLeft:"14px"}}>Hey, How can I help you? Choose from below option</p>
            <div style={{marginLeft:"14px"}}>
              <button onClick={()=>setdata("At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. White moves first, followed by Black. The game is won by checkmating the opponent's king, i.e. threatening it with inescapable capture. There are also several ways a game can end in a draw.")}>How to Play Chess?</button>
              <button onClick={()=>setdata("64")}>How many squares does a chessboard have?</button>
              <button onClick={()=>setdata("16")} value="3">How many pieces does each player start with in a game of chess?</button>
            </div>
            <div style={{marginLeft:"14px"}}>
                <h4>Answer:</h4>
                <p>{data}</p>
            </div>
          </div>
        </div>:<div>
        </div>}
      </div>
    </div>
  )
}

export default User