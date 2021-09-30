import * as styles from './App.module.css';
import React, {useRef, useEffect} from 'react';

function App() {

    const message = useRef();

    const [messageList, setMessageList] = React.useState([]);

    useEffect(() => {
        if(messageList.length > 0) {
            let lastMessageAuthor = messageList[messageList.length - 1].author;
            if(lastMessageAuthor === 'me') {
                let botMessage = {text: "i am bot", author: "bot"};
                let delay = Math.random() * 2000;
                setTimeout(() => {
                    setMessageList([...messageList, botMessage]);
                }, delay);
            };
        }
    }, [messageList]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let newMessage = {
            text: message.current.value,
            author: "me"
        };

        if (newMessage.text.length > 0) {
            setMessageList([...messageList, newMessage]);
            message.current.value = ''
        } else {
            alert('Your message is empty!')
        }
    }

    return (
        <div className={styles.App}>
            <div>
            {
                messageList.map((message, index) =>
                    <div
                        className={styles.message}
                        key={index}
                    >
                            {message.author}: {message.text}
                    </div>)
            }
            </div>
            <form
                className={styles.formSection}
                onSubmit={handleSubmit}
            >
                <label>
                    type your message:
                    <input
                        className={styles.inputText}
                        type="text"
                        ref={message}
                    />
                </label>
                <input
                    className={styles.inputSubmit}
                    type="submit"
                    value="send"
                />
            </form>
        </div>
    );
}

export default App;
