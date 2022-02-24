import React, { ChangeEvent, FC, useEffect, useState } from "react";
import "./App.css";
import Players from "./Components/Players";
import { IPlayer } from "./Interfaces";

const App: FC = () => {
  const getLocalPlayers = () => {
    let list = localStorage.getItem("playerLists");
    if (list) {
      return JSON.parse(localStorage.getItem("playerLists") || "");
    } else {
      return [];
    }
  };

  const [player, setPlayer] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [todoList, setTodoList] = useState<IPlayer[]>(getLocalPlayers());

  useEffect(() => {
    localStorage.setItem("playerLists", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "player") {
      setPlayer(event.target.value);
    } else {
      setRole(event.target.value);
    }
  };

  const addPlayers = (): void => {
    const newPlayer = { playersName: player, role: role };
    setTodoList([...todoList, newPlayer]);
    setPlayer("");
    setRole("");
  };

  const removePlayer = (playerToRemove: string): void => {
    setTodoList(
      todoList.filter((player) => {
        return player.playersName !== playerToRemove;
      })
    );
  };

  return (
    <div className="App">
      <div className="header pt-5 pb-3">
        <h2
          style={{
            color: "white",
            fontWeight: "600",
            paddingBottom: "1%",
          }}
        >
          BPL PLAYER AUCTION
        </h2>
        
        <div
          style={{
            paddingLeft: "25%",
            paddingRight: "25%",
          }}
          className="inputField"
        >
          <div className="input-group mb-3">
            <input
              type="text"
              value={player}
              name="player"
              onChange={handleChange}
              className="form-control"
              placeholder="Player's Name"
              aria-label="Player's Name"
            />
            <span
              style={{
                backgroundColor: "rgb(12, 150, 115)",
                color: "white",
              }}
              className="input-group-text"
            >
              &
            </span>
            <input
              type="Text"
              value={role}
              name="role"
              onChange={handleChange}
              className="form-control"
              placeholder="Budget"
              aria-label="Role"
            />
          </div>
        </div>
        <button type="button" onClick={addPlayers} className="btn btn-dark">
          Add The Player
        </button>
      </div>
      <div className="todolist">
        <h3 className="py-3 fw-bolder text-light">CHATTAGRAM CHALANGERS Team</h3>
        {todoList.map((player: IPlayer, key: number) => {
          return (
            <Players key={key} player={player} removePlayer={removePlayer} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
