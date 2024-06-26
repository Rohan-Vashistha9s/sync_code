import React, { useState } from 'react'
import logo from "./images/logo.webp"
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

function Home() {
    const [roomId, setRoomId] = useState("");
    const [username, setUserName] = useState("");
    const navigate = useNavigate();

    const CreateNewRoom = () => {
        const value = Math.random().toString(36).slice(2, 7);
        //console.log(value)
        toast.success('Created new room');
        setRoomId(value)
    }

    const joinRoomHandle = () => {
        if (roomId !== "" && username !== "") {
            navigate(`editor/${roomId}`, {
                state: {
                    username,
                }
            });
            toast.success('Successfully entered room');
        }
        else {
            toast.error('Not valid inputs, try again!')
            return;
        }
    }

    const roomIdhandle = (e) => {
        const value = e.target.value;
        setRoomId(value)
    }

    const userNamehandle = (e) => {
        console.log(e.target.value)
        setUserName(e.target.value)
    }

    return (
        <>
            <div className="container">
                <div className="boxes">
                    <div>
                        <p className="app-heading"> <img className="image" src={logo} alt=""></img>Sync Code</p>
                        <p className="paragraph3">Paste Invitation Room ID</p>
                    </div>
                    <div className="room_id">
                        <input type='text' className="input-box" value={roomId} onChange={roomIdhandle} placeholder="Room Id" />
                    </div>
                    <div className="username">
                        <input type='text' className="input-box" value={username} onChange={userNamehandle} placeholder="Username" />
                    </div>
                    <button type='submit' className="Join_botton" onClick={joinRoomHandle}>Join</button>
                    <p className="paragraph1">If you don't have invite then create <span onClick={CreateNewRoom} className="new_room">new room</span></p>
                </div>
            </div>
            <div className="footer">
                <p className="paragraph2">Build With Love <span className="github_link">Rohan</span></p>
            </div>
        </>
    )
}

export default Home
