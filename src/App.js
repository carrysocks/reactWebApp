import React from "react";

function Wallpaper({ name, picture }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const WhoWallpaper = [
  {
    id: "1",
    name: "joy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrSvP6xK9fRklE2ph3JB6FnQOHUd5RyVvFuCwqbDT9qo0inzFl"
  }
];

function renderWho(who) {
  return <Wallpaper key={who.id} name={who.name} picture={who.image} />;
}

export default function App() {
  return <div>{WhoWallpaper.map(renderWho)}</div>;
}
