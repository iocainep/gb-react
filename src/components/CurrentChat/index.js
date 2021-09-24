import * as styles from "./index.module.css";
import React, {useEffect} from "react";
import {InputForm} from "../InputForm";

export const Chat = ({}) => {

    const [messageList, setMessageList] = React.useState([]);

    const updateData = (text) => {
        setMessageList([...messageList, { name: "me", message: text }]);
    }

    useEffect(() => {
        if(messageList.length > 0) {
            let lastMessageAuthor = messageList[messageList.length - 1].name;
            if(lastMessageAuthor === 'me') {
                let botMessage = {name: "bot", message: "i am bot"};
                let delay = Math.random() * 2000;
                setTimeout(() => {
                    setMessageList([...messageList, botMessage]);
                }, delay);
            };
        }
    }, [messageList]);

    return (
        <div>
        {
            messageList.map((message, index) =>
                <div
                    className={styles.message}
                    key={index}
                >
                    {message.name}: {message.message}
                </div>)
        }
            <InputForm updateData={updateData}/>
    </div>
    )

}
