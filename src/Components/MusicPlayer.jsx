import React, { Component } from "react";
import styled from "styled-components";
import Layouts from "./Layouts";
import Colors from "../Services/colors.js";

export default function MusicPlayer(props) {
  const BackgroundMusic = styled.div`
    position: absolute;
    z-index: -2;
    overflow: hidden;
    iframe {
      position: absolute;
      top: -100px;
    }
  `;

  const youtubeIds = [
    "ZALuPKLfNf0",
    "_sI_Ps7JSEk",
    "DpBWUv_91ho",
    "Tlf00NT6mig",
    "MirLxGmmBIg",
    "hvvme-WMzQM"
  ];

  const randomId = function() {
    const choice = Math.floor(Math.random() * youtubeIds.length) + 1;
    return youtubeIds[choice];
  };

  return (
    <BackgroundMusic>
      <iframe
        width="100"
        height="10"
        src={`https://www.youtube.com/embed/${randomId()}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      />
    </BackgroundMusic>
  );
}
