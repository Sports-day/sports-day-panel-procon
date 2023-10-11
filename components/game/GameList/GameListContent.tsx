import {Stack} from "@mui/material";
import * as React from "react";
import {GamePointBar} from "./GamePointBar";
import {Game} from "../../../src/models/GameModel";
import {useContext} from "react";
import {MatchesContext} from "../../context";
import {useFetchGameMatches} from "../../../src/features/games/hook";

export const GameListContent = (props: { game: Game }) => {
    const { matches, isFetching } = useFetchGameMatches(props.game.id)
    const filteredMatches = matches.filter(match => match.gameId == props.game.id)
    const maxLeftScore = Math.max.apply(Math, filteredMatches.map(match => match.leftScore))
    const maxRightScore = Math.max.apply(Math, filteredMatches.map(match => match.rightScore))
    const maxScore = maxLeftScore > maxRightScore ? maxLeftScore : maxRightScore
    const barOffset = (maxScore == 0) ? 1 : (95 / maxScore)

    if (isFetching) {
        return null
    }

    return (
        <>
            {filteredMatches
                .sort((a, b) => a.startAt.localeCompare(b.startAt))
                .map((match) => {
                return (
                    <Stack key={match.id}>
                        <GamePointBar
                            leftScore={match.leftScore}
                            rightScore={match.rightScore}
                            leftTeamId={match.leftTeamId}
                            rightTeamId={match.rightTeamId}
                            umpireTeam={match.judge ?? ""}
                            time={match.startAt}
                            barOffset={barOffset}
                        />
                    </Stack>
                )
            })}
        </>
    )
}