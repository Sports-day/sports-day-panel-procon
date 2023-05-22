import type {NextPage} from 'next'
import {signIn} from "next-auth/react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Auth.module.css'
import {Avatar, Box, Button, Card, CardContent, Container, Grid, Stack, SvgIcon, Typography} from "@mui/material";
import Logo from "public/logo.svg"
import MSLogo from "public/ms.svg"
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import {createTheme} from "../components/theme";
import {Footer} from "../components/layouts/footer";

const Auth: NextPage = () => {
    const theme = createTheme();
    return(
        <ThemeProvider theme={theme}>
            <Head>
                <title>SPORTSDAY : Login</title>
                <meta name="description" content="SPORTSDAY Login page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                maxHeight={"100vh"}
                sx={{backgroundColor:"#e8ebf8", width: '100vw' , height: '90vh', overflow:'hidden'}}
            >
                <Container
                    maxWidth={"xl"}
                >
                    <Stack
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"flex-start"}
                        width={"100%"}
                        height={"100vh"}
                        spacing={3}
                        pt={4}
                        pb={6}
                    >

                        <Stack
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            spacing={2}
                        >
                            <Typography fontSize={"24px"} fontWeight={"bold"}>みんなの</Typography>
                            <Typography fontSize={"24px"} fontWeight={"bold"}>球技大会、</Typography>
                            <Typography fontSize={"24px"} fontWeight={"bold"}>あなたの</Typography>
                            <Stack
                                direction={"row"}
                                spacing={0.5}
                            >
                                <Logo width={22*8.45} height={22} fill={"black"}/>
                                <Typography fontSize={"24px"} fontWeight={"bold"} sx={{position:"relative", bottom:"9px"}}>。</Typography>
                            </Stack>
                        </Stack>
                        <Stack width={"fit-content"}>
                            <Card>
                                <Button
                                    onClick={() => signIn("azure-ad", {callbackUrl: "/"})}
                                    sx={{width:"fit-content"}}
                                >
                                    <CardContent sx={{width:"fit-content"}}>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            spacing={2}
                                        >
                                            <MSLogo width={16} height={16}/>
                                            <Typography sx={{color: "#FFF", fontSize: "16px"}}>
                                                KOSENアカウントではじめよう
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Button>
                            </Card>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Auth