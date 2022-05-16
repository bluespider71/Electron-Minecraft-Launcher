import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/definitions";
import Animation from "../common/Animation";

const LauncherGamesScreen = () => {
    const navigate = useNavigate();
    const games = [
        { id: 1, name: "Tic Tac Toe", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 2, name: "Snake", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 3, name: "2048", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
    ];
    const allGames = [
        { id: 1, name: "Tic Tac Toe", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 2, name: "Snake", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 3, name: "2048", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 4, name: "Tic Tac Toe", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 5, name: "Snake", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
        { id: 6, name: "2048", image: "http://res.heraldm.com/content/image/2021/07/04/20210704000124_0.jpg" },
    ];

    return (
        <div className="clickable">
            <Grid container className="launcher-games-container">
                <Grid item xs={12} sm={12} md={12} lg={12} className="launcher-my-games">
                    <Grid container className="dragable">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <p className="launcher-title">Oyunlarım</p>
                        </Grid>
                        {games.map(
                            (game, index) =>
                                index < 3 && (
                                    <Grid className="launcher-my-game clickable" item xs={12} lg={3} md={4} key={game.id}>
                                        <div onClick={() => navigate(routes.LoadingScreen)}>
                                            <img src={game.image} alt={game.name} />
                                            <p>{game.name}</p>
                                        </div>
                                    </Grid>
                                )
                        )}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} className="launcher-all-games">
                    <Grid container className="dragable">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <p className="launcher-title">Tüm Oyunlar</p>
                        </Grid>

                        {allGames.map(
                            (game, index) =>
                                index < 6 && (
                                    <Grid className="launcher-all-game clickable" item xs={12} lg={3} md={4} key={game.id}>
                                        <div onClick={() => navigate(routes.LoadingScreen)}>
                                            <img src={game.image} alt={game.name} />
                                            <p>{game.name}</p>
                                        </div>
                                    </Grid>
                                )
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LauncherGamesScreen;
