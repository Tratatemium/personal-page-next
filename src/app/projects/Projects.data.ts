import type { ImageType } from "@/components/Gallery";

import {
  My2048game1,
  My2048game2,
  My2048game3,
  My2048game4,
  MemoryGame1,
  MemoryGame2,
  MemoryGame3,
  MemoryGame4,
  HappyPaws1,
  HappyPaws2,
  HappyPaws3,
  HappyPaws4,
} from "../../assets/index";

export const galleries: Record<string, ImageType[]> = {
  my2048game: [
    {
      src: My2048game1,
      alt: "2048 game interface with tiles and score display",
      caption: "Clean game UI with organized board layout and score counter",
    },
    {
      src: My2048game2,
      alt: "Modal dialog for game restart confirmation",
      caption: "Confirmation dialog with accessible button controls",
    },
    {
      src: My2048game3,
      alt: "2048 game board with multiple tile values and high score",
      caption:
        "Advanced gameplay showing various tile combinations and responsive design",
    },
    {
      src: My2048game4,
      alt: "Victory screen with final board state and completion stats",
      caption:
        "End-screen design displaying board state and game completion statistics",
    },
  ],
  memoryGame: [
    {
      src: MemoryGame1,
      alt: "Memory game start screen with difficulty selection menu",
      caption:
        "Main menu featuring multiple difficulty levels with golden-themed UI design",
    },
    {
      src: MemoryGame2,
      alt: "Memory game board with mystical card designs and revealed pairs",
      caption:
        "Gameplay showing custom card artwork with mystical symbols and icons",
    },
    {
      src: MemoryGame3,
      alt: "Memory game in progress with partially matched cards",
      caption:
        "Mid-game state displaying card matching mechanics and move counter",
    },
    {
      src: MemoryGame4,
      alt: "Victory screen with game completion message",
      caption:
        "Completion screen with styled modal dialog and navigation options",
    },
  ],
  happyPaws: [
    {
      src: HappyPaws1,
      alt: "Happy Paws landing page with hero image and urgent adoptions section",
      caption:
        "Main homepage featuring hero section with adoption call-to-action and mission statement",
    },
    {
      src: HappyPaws2,
      alt: "Pet adoption listings filtered by cats category showing available animals",
      caption:
        "Filtered gallery view displaying urgent cat adoptions with pet cards and details",
    },
    {
      src: HappyPaws3,
      alt: "Individual pet profile page showing cat details and photo gallery",
      caption:
        "Detailed pet view with image carousel, breed information, and age specifications",
    },
    {
      src: HappyPaws4,
      alt: "Adoption application form with user information input fields",
      caption:
        "Interactive adoption form collecting applicant details and pet experience information",
    },
  ],
};
