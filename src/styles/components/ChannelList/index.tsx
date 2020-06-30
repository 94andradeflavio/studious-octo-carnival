import React from 'react'
import {Container, Category, AddCategoryIcon} from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="faculdade" />
            <ChannelButton channelName="CS:GO" />
            <ChannelButton channelName="Warzone" />
            <ChannelButton channelName="GTA V" />
            <ChannelButton channelName="youtube" />
            <ChannelButton channelName="PUBG dos broders" />

        </Container>
    );
}

export default ChannelList;