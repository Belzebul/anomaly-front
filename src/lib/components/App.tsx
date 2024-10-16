import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, Flex, Layout, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';
import hoyodata from '../../data/hoyolab_character.json';
import { CharacterID } from '../constants';
import { ServiceHoyolab } from '../importer/hoyolab_parser';
import './App.css';
import { CharProfile } from './charProfilePrevile/CharProfile';
import { CharStatSummary } from './charStatPreview/CharStatsSummary';
import { DiscSetPreview } from './discSetPreview/DiscSetPreview';


const ExternalLayout: React.FC = () => {
    const serviceHoyoLab = new ServiceHoyolab(hoyodata);
    const char = serviceHoyoLab.buildCharacter(CharacterID.GRACE);
    char.calc_all();
    const discSet = char.discSet;

    return (
        <Layout style={{ minHeight: '100%' }}>
            <Header className='header' />
            <Layout hasSider />
            <Content className='content'>
                <Flex gap={8}>
                    <Flex align='stretch' vertical>
                        {CharProfile(char)}
                    </Flex>
                    <Flex align='stretch' vertical>
                        {CharStatSummary(char)}
                    </Flex>
                    <Flex align='stretch' vertical>
                        {DiscSetPreview(discSet)}
                    </Flex>
                </Flex>
            </Content>
        </Layout>
    )
}

const App: React.FC = () => (
    <ConfigProvider
        theme={{
            "token": {
                "borderRadius": 7,
                "wireframe": false,
                "colorPrimary": "#d6015a",
                "colorInfo": "#d6015a"
            },
            "components": {
                "Layout": {
                    "headerBg": "rgb(41,0,19)"
                },
                "Menu": {
                    "algorithm": true
                }
            },
            "algorithm": theme.darkAlgorithm

        }}
    >
        <StyleProvider hashPriority="low">
            <ExternalLayout />
        </StyleProvider>
    </ConfigProvider >
);

export default App