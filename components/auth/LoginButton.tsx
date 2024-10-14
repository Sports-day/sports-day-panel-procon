'use client'
import {Button, Stack, Typography} from "@mui/material";
import MSLogo from "@/public/images/ms.svg";
import * as React from "react";
import {useTheme} from "@mui/material/styles";
import {useRouter} from "next/navigation";

export default function LoginButton() {
    const theme = useTheme()
    const subDirectory = process.env.SUB_DIRECTORY ? process.env.SUB_DIRECTORY : "/"
    const router = useRouter()

    const handleLogin = async () => {
        await fetch("/api/auth/callback", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            })
        })
        router.replace(subDirectory)
    }

    return (
        <Button
            variant="contained"
            color={"secondary"}
            onClick={handleLogin}
            sx={{px:3, py:2,mb:1, width:"100%", backgroundColor:`${theme.palette.text.primary}`}}
            disableElevation
        >
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
            >
                <MSLogo width={16} height={16}/>
                <Typography fontSize={"14px"} color={theme.palette.background.paper}>
                    ログイン
                </Typography>
            </Stack>
        </Button>
    );
}
