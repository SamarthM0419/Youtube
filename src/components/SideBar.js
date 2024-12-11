import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg p-5 w-48">
      <ul>
        <li>🏠 Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Library</li>
      </ul>
      <h1 className="font-bold text-lg pt-5">Subsriptions</h1>
      <ul>
        <li>🎼 Music</li>
        <li>🏓 Sports</li>
        <li>🎮 Gaming</li>
        <li>🎥 Movies</li>
      </ul>
      <h1 className="font-bold text-lg pt-5">Watch Later</h1>
      <ul>
        <li>🎼 Music</li>
        <li>🏓 Sports</li>
        <li>🎮 Gaming</li>
        <li>🎥 Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
