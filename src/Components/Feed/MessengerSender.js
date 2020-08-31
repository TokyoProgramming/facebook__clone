import React, {useState} from "react";
import './MessengerSender.css'
import {Avatar} from "@material-ui/core";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";
import {useStateValue} from "../../StateProvider";
import db from "../../Firebase";
import firebase from "firebase";

function MessengerSender(){
    const [{user}, distpach] = useStateValue()
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });
        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messangeSender">
            <div className="messageSender__top">
                <Avatar src={imageUrl}/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)"
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>
            <div className="messageSender__bottom">
                <div className="massageSender__option">
                    <Videocam style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="massageSender__option">
                    <PhotoLibrary style={{ color: "green"}} />
                    <h3>Photo/Live</h3>
                </div>
                <div className="massageSender__option">
                    <InsertEmoticon style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessengerSender;
