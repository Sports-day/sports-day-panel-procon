import {
    Box,
    Grid,
    Stack,
    Typography,
    DialogContentText,
} from "@mui/material";
import {RuleNumCard} from "./rule-elements/RuleNumCard";
import ReactMarkdown from "react-markdown";
import Coat from "../../public/rules/coat-badminton.svg"
import * as React from "react";

const markdown = `
# 📗ルール
- 基本的なバスケットボールのルールに準ずるが以下の点に注意する。
- 秒数ルールなし。
- 過激なファウルを行った者は審判の判断で即退場とする。
- 通常のシュートは2 点、 スリーポイントシュートは3 点。
- 選手交代は2 分間のハーフタイムにのみ行う。

# 🥇順位決定法
- 勝ち点制を採用し、 勝ちを3 点、 引き分けを1 点、 負けを0 点とし、合計点で順位を決定する。
- 勝ち点が同点の場合、得失点差で順位を決定する。

# ⚠️注意事項
- 審判の判定に従う。
`

export const RuleBasketball = () => {
    return(
        <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            spacing={2}
            py={2}
            sx={{width:"100%"}}
        >
            <Grid container>
                <Grid xs={12} sm={12} lg={12}>
                    <RuleNumCard title={"会場"} content={"第二体育館"} sub={" "}/>
                </Grid>
                <Grid xs={6} sm={6} lg={3}>
                    <RuleNumCard title={"試合時間"} content={"10分"} sub={"☀️☔️共通"}/>
                </Grid>
                <Grid xs={6} sm={6} lg={3}>
                    <RuleNumCard title={"チーム人数"} content={"5 〜 7"} sub={"人"}/>
                </Grid>
                <Grid xs={6} sm={6} lg={3}>
                    <RuleNumCard title={"担当審判"} content={"バスケ部"} sub={"-"}/>
                </Grid>
                <Grid xs={12} sm={6} lg={3}>
                    <RuleNumCard title={"部員ハンデ"} content={"バスケ部員はコート内2人まで"} sub={"ビブスを着用する"}/>
                </Grid>
                <Grid xs={12} sm={12} lg={12}>
                    <RuleNumCard title={"女子ハンデ"} content={"女子1人あたり2点"} sub={"(試合開始時に加点、上限6点)"}/>
                </Grid>
            </Grid>
            <DialogContentText
                id="scroll-dialog-description"
                tabIndex={-1}
                color={"#E8EBF8"}
                lineHeight={"27px"}
            >
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </DialogContentText>
        </Stack>
    )
}