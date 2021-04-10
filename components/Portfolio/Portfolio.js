import React from "react";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => (
    <section id="portfolio" className="portfolio">
        <h2 className="heading__secondary mt-sm">My projects</h2>

        <PortfolioItem
            title="Chess analysis board"
            imageName="chess.png"
            liveHref="https://eloquent-goodall-82cf88.netlify.app/"
            codeHref="https://github.com/dolidius/Chess-analysis-board/"
            tags={["React.js", "Javascript", "CSS Modules"]}
            desc="Chess game analysis is platform that allow user to analyse their chess game. You can import your game, check the evaluation of the position or check the best move provided by the chess enginge stockfish."
        />

        <PortfolioItem
            title="E-card"
            imageName="e_card.png"
            liveHref="https://e-card-kaiji.netlify.app/"
            codeHref="https://github.com/dolidius/E-card"
            tags={["React.js", "Javascript", "CSS", "SCSS"]}
            desc="E-card is a card game based on movie, mobile-ready written with my friend Idlesolution in react. To learn more visit this page."
        />

        <PortfolioItem
            title="Boilerplates CLI"
            imageName="cli.png"
            liveHref=""
            codeHref="https://github.com/dolidius/Boilerplates-CLI"
            tags={["Javascript", "CLI"]}
            desc="Command line interface for creating boilerplates. User can add new files to boilerplates folder and then recreate it with just one command"
        />

        <PortfolioItem
            title="Reddit-clone"
            imageName="reddit.png"
            liveHref=""
            codeHref="https://github.com/dolidius/Reddit-clone"
            tags={[
                "React",
                "Javascript",
                "Node.js",
                "Express",
                "MongoDB",
                "Passport",
                "JWT Token Auth",
                "SCSS"
            ]}
            desc="Reddit-clone is a clone of a popular forum made for learning purposes and to show my skills off."
        />

        <PortfolioItem
            title="Fligts"
            imageName="flights.png"
            liveHref="https://nostalgic-hodgkin-464774.netlify.com/"
            codeHref="https://github.com/dolidius/Flights"
            tags={["HTML5", "CSS", "SCSS", "PSD to HTML"]}
            desc="Flights is responsive static website converted from PSD written in 'Daily css challenges'. Written using css-preproccesor Sass"
        />

        <PortfolioItem
            title="MaguwoHost"
            imageName="maguwohost.png"
            liveHref="https://inspiring-tereshkova-44a345.netlify.com/"
            codeHref="https://github.com/dolidius/Maguwohost"
            tags={["HTML5", "CSS", "SCSS", "PSD to HTML"]}
            desc="MaguwoHost is responsive static website converted from PSD written in 'Daily css challenges'. Written using css-preproccesor Sass"
        />

    </section>
);

export default Portfolio;
