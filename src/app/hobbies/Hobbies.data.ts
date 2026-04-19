import type { ImageType } from "../../components/Gallery.tsx";

import {
  Sourdough,
  Brioche,
  Ramen,
  FriedRice,
  TableRestoration1,
  TableRestoration2,
  TableRestoration3,
  TableRestoration4,
  TableRestoration5,
  TableRestoration6,
  DeskOrganiser1,
  DeskOrganiser2,
  DeskOrganiser3,
  DeskOrganiser4,
  DeskOrganiser5,
  DeskOrganiser6,
  DeskOrganiser7,
} from "../../assets/index";

export const galleries: Record<string, ImageType[]> = {
  cooking: [
    {
      src: Sourdough,
      alt: "A picture of a sourdough bread",
      caption: "Freshly baked sourdough bread",
    },
    {
      src: Brioche,
      alt: "A picture of a brioche bread",
      caption: "Soft, buttery brioche",
    },
    {
      src: Ramen,
      alt: "A picture of Japanese ramen",
      caption: "Homemade Japanese ramen with chashu pork and marinated egg",
    },
    {
      src: FriedRice,
      alt: "A picture of fried rice ingredients",
      caption: "Ready to cook fried rice with kimchi and bacon",
    },
  ],
  tableRestoration: [
    {
      src: TableRestoration1,
      alt: "Tabletop with severe water damage and worn finish",
      caption:
        "Initial state — the tabletop was badly damaged by water and the finish was gone.",
    },
    {
      src: TableRestoration2,
      alt: "Broken wooden table legs with bug damage",
      caption:
        "Initial state — several leg elements were broken and damaged by bugs.",
    },
    {
      src: TableRestoration3,
      alt: "Disassembled table during repair process",
      caption: "The table fully disassembled in the process of repair.",
    },
    {
      src: TableRestoration4,
      alt: "Applying French polishing with thin layers of shellac",
      caption:
        "French polishing involves applying many thin coats of shellac dissolved in alcohol.",
    },
    {
      src: TableRestoration5,
      alt: "Repaired wooden table legs",
      caption: "Repaired legs restored to structural integrity.",
    },
    {
      src: TableRestoration6,
      alt: "Restored late 19th-century wooden table",
      caption: "The fully finished and restored table.",
    },
  ],
  deskOrganiser: [
    {
      src: DeskOrganiser1,
      alt: "AutoCAD technical drawing of desk organizer parts",
      caption:
        "The digital design by my partner was meticulously transferred into an AutoCAD technical drawing.",
    },
    {
      src: DeskOrganiser2,
      alt: "Vector drawings of individual organizer parts",
      caption: "From AutoCAD to vector drawings of every part.",
    },
    {
      src: DeskOrganiser3,
      alt: "Laser-cut plywood parts of desk organizer",
      caption: "Parts were laser-cut out of plywood.",
    },
    {
      src: DeskOrganiser4,
      alt: "Polished and stained plywood organizer parts",
      caption: "Parts were polished and stained.",
    },
    {
      src: DeskOrganiser5,
      alt: "Desk organizer parts with transparent lacquer finish",
      caption: "Finished with a transparent lacquer.",
    },
    {
      src: DeskOrganiser6,
      alt: "Assembled plywood desk organizer",
      caption: "Finished desk organizer.",
    },
    {
      src: DeskOrganiser7,
      alt: "Another view of finished desk organizer",
      caption: "Another finished desk organizer view.",
    },
  ],
};
