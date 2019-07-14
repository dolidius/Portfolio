import React from "react";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => (
    <section id="portfolio" className="portfolio">
        <h2 className="heading__secondary mt-sm">My projects</h2>

        <PortfolioItem
            title="Shop Template"
            imageName="shop_template.png"
            liveHref="https://pedantic-heyrovsky-565c2d.netlify.com/"
            codeHref="https://github.com/dolidius/Shop-template"
            tags={["HTML5", "CSS", "SCSS", "PSD to HTML"]}
        />

        <PortfolioItem
            title="Fligts"
            imageName="flights.png"
            liveHref="https://nostalgic-hodgkin-464774.netlify.com/"
            codeHref="https://github.com/dolidius/Flights"
            tags={["HTML5", "CSS", "SCSS", "PSD to HTML"]}
        />

        <PortfolioItem
            title="MaguwoHost"
            imageName="maguwohost.png"
            liveHref="https://inspiring-tereshkova-44a345.netlify.com/"
            codeHref="https://github.com/dolidius/Maguwohost"
            tags={["HTML5", "CSS", "SCSS", "PSD to HTML"]}
        />

        <PortfolioItem
            title="E-card"
            imageName="e_card.png"
            liveHref="https://e-card.ga/"
            codeHref="https://github.com/dolidius/E-card"
            tags={["React.js", "Javascript", "CSS", "SCSS"]}
            desc="E-card is a card game based on movie, mobile-ready written with my friend Idlesolution in react. To learn more visit this page."
        />

        <PortfolioItem
            title="TFT Compedium"
            imageName="tft.png"
            liveHref="https://play.google.com/store/apps/details?id=com.stranweb.TeamfightTacticsCompedium"
            // codeHref="https://github.com/dolidius/Hangman-Game"
            tags={["React", "React Native", "Javascript", "React Navigation"]}
            // desc="Hangman is a guessing game. Computer choose a random word, phrase or sentence related to programming and the player tries to guess it by suggesting letters, within a certain number of guesses."
            desc="Teamfight tactics compedoum is a wiki app to look up and learn about Teamfight Tactics game."
        />

    </section>
);

export default Portfolio;
