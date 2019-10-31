
import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';


const botAnswers = ['Отстань, я робот', 'Кто такая Сири????!!!', 'Поговорите лучше с Алисой', 'Тебе конец, кожаный мешок'];

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.messages.length < this.state.messages.length
            && this.state.messages[this.state.messages.length - 1].sender === 'me')
         {
            setTimeout(() => this.setState({ 'messages': [...this.state.messages,
                    { text: randomChoice(botAnswers), sender: 'bot'}] }), 1000);
        }
    }

    handleSendMessage = () => {
        const { messages, input } = this.state;
        this.setState({
            'messages': [...messages, {text: input, sender: 'me'}],
            'input': ''
        });
    };

    handleChange = (event) => {
        this.setState({ 'input': event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(message)
        }
    };


    render() {
        const { messages } = this.state;

        const messageElements = messages.map(message => <Message key={ message.text } text={ message.text } sender={ message.sender }/>);

        return (
            <div className="layout">
            <div className="message-field">
                { messageElements }
            </div>

                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                        name="input"
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '24px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                    />
                    <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input) }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>

        </div>
    )
}
}