import React, { useRef, useEffect } from 'react'
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage'


const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight
        }

    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Usuário Aleatório"
                    date="01/01/0001"
                    content="Mensagem Aleatória"
                />
                <ChannelMessage 
                    author="Flávio Andrade"
                    date="19/06/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Lucas Calvo"
                    date="28/06/2020"
                    content={
                        <>
                            <Mention>@Flávio Andrade</Mention>, me carrega aqui no Warzone de novo, por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;