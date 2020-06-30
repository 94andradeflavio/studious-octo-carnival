import React from 'react'
import {Container, Role, User, Avatar} from './styles'


interface UserProps {
    nickname: string;
    isBot?: boolean;
}


const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}

        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 5</Role>
            <UserRow nickname="Thanos junto" />
            <UserRow nickname="ERROR 404" />
            <UserRow nickname="Superuser" isBot />
            <UserRow nickname="The Powerpuffboy" />
            <UserRow nickname="Qualquer Nome" />

            <Role>Offline - 150</Role>
            <UserRow nickname="Computasono" isBot />
            <UserRow nickname="Relâmpago Marquinhos" />
            <UserRow nickname="Rock Lee do Pagode Namora D+" />
            <UserRow nickname="Rábalabaxúrias" />
            <UserRow nickname="D i s q u a l i f i e d" />
            <UserRow nickname="The Bugador" isBot />
            <UserRow nickname="Expert com sono" />
            <UserRow nickname="um minuto para o fim do coffee" />
            <UserRow nickname="3N1?M4" />
            <UserRow nickname="Clube das Winx" />
            <UserRow nickname="GG é nós" isBot />
            <UserRow nickname="Garoto_de_Programa" isBot />
            <UserRow nickname="S4D B0Y" />
            <UserRow nickname="Gadod++" />
            <UserRow nickname="Serjão Matador de Bug" />
            <UserRow nickname="buiatchaka" />
            <UserRow nickname="Dois caras numa moto" />
            <UserRow nickname="Press F to pay respects" />
            <UserRow nickname="Bit Please" />
            <UserRow nickname="Stormtroop3r" />
            <UserRow nickname="User com o melhor nome" />
            <UserRow nickname="Tô aqui o/" />
            <UserRow nickname="Ravioli" />
            <UserRow nickname="lupa linda" isBot />
            <UserRow nickname="O(pow(r*r,a))" />
            <UserRow nickname="QueroCafé" />
            <UserRow nickname="Scrum Master" />
            <UserRow nickname="Aqui que é o hackathon?" />
            <UserRow nickname="Testemunha de Java" isBot />
            <UserRow nickname="Você sabe quem" />
            <UserRow nickname="God_Of.jar" />
        </Container>
    );
}

export default UserList;