import React from 'react'
import { Container, HomeHeader, Body, Top, H1, H2, P, Button, Div, Img, Card, CardIcon, CardContent, CardFooter } from './home.styles'
import { CustomIcon } from './../../assets/Icons/Icons'
function Home(props) {
    return (
            <Container>
            <HomeHeader>
                <Div>
                    <Img source={require('../../assets/img/logo.png')}></Img>
                </Div>
                <H1>50</H1>
                <P style={{ fontSize: 15, color: '#9CADD2'}}>Orçamentos Gerados</P>
            </HomeHeader>
                <Body>
                    <Top>
                        <H2>Recentes</H2>
                        <Button>
                            <P style={{ fontSize: 12, color: '#2E55A0' }}>VER TODOS</P>
                        </Button>
                    </Top>
                    <Card>
                        <CardIcon>
                            <CustomIcon name="roof" size={32} style={{ color: '#2E55A0'}}/>
                        </CardIcon>
                        <CardContent>
                            <P style={{ fontSize: 20, color: '#2E55A0' }}>José</P>
                            <P style={{ fontSize: 12, color: '#9CADD2' }}>Cobertura Metálica 164m²</P>
                        </CardContent>
                        <CardFooter>
                            <P style={{ fontSize: 8, color: '#9CADD2' }}>15/09/2020</P>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardIcon>
                            <CustomIcon name="roof" size={32} style={{ color: '#2E55A0' }} />
                        </CardIcon>
                        <CardContent>
                            <P style={{ fontSize: 20, color: '#2E55A0' }}>José</P>
                            <P style={{ fontSize: 12, color: '#9CADD2' }}>Cobertura Metálica 164m²</P>
                        </CardContent>
                        <CardFooter>
                            <P style={{ fontSize: 8, color: '#9CADD2' }}>15/09/2020</P>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardIcon>
                            <CustomIcon name="roof" size={32} style={{ color: '#2E55A0' }} />
                        </CardIcon>
                        <CardContent>
                            <P style={{ fontSize: 20, color: '#2E55A0' }}>José</P>
                            <P style={{ fontSize: 12, color: '#9CADD2' }}>Cobertura Metálica 164m²</P>
                        </CardContent>
                        <CardFooter>
                            <P style={{ fontSize: 8, color: '#9CADD2' }}>15/09/2020</P>
                        </CardFooter>
                    </Card>
                </Body>
            </Container>
    )
}

export default Home
