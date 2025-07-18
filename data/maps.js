const slugify = require("slugify");

function generateImagePath(title, filename) {
  const slug = slugify(title, { lower: true, strict: true });
  return `maps/${slug}/${filename}`;
}

exports.maps = [
  {
    title: "Summer Forest Road Map",
    image: generateImagePath(
      "Summer Forest Road Map",
      "summer_forest_road.webp"
    ),
    categories: ["Forest", "Road"],
    description: "A lush summer forest with a winding road for travel scenes.",
    dimensions: { width: 4200, height: 2800 },
    gridSize: 140,
    active: true,
    isFavorited: [1, 4, 6],
    type: "subscribe",
  },
  {
    title: "Desert Ruin Map",
    image: generateImagePath("Desert Ruin Map", "desert_ruin.webp"),
    categories: ["Desert", "Ruins"],
    description: "Ancient ruins buried in a scorching desert landscape.",
    dimensions: { width: 5600, height: 4200 },
    gridSize: 140,
    active: true,
    isFavorited: [3],
    type: "subscribe",
  },
  {
    title: "Ruin Building within Swamp",
    image: generateImagePath(
      "Ruin Building within Swamp",
      "ruin_building_within_swamp.webp"
    ),
    categories: ["Swamp", "Ruins"],
    description: "A decrepit building surrounded by a murky swamp.",
    dimensions: { width: 3500, height: 2800 },
    gridSize: 140,
    active: false,
    isFavorited: [1],
    type: "subscribe",
  },
  {
    title: "A Japanese City with the Adventurers Guild Japanese Style Preview",
    image: generateImagePath(
      "A Japanese City with the Adventurers Guild Japanese Style Preview",
      "a_japanese_city_with_the_adventurers_guild_japanese_style_preview.webp"
    ),
    categories: ["City", "Japanese", "Guild"],
    description:
      "Traditional Japanese-style city with a central adventurer's guild.",
    dimensions: { width: 5000, height: 3000 },
    gridSize: 140,
    active: true,
    isFavorited: [3, 4],
    type: "subscribe",
  },
  {
    title: "Forest with a Small Lake",
    image: generateImagePath(
      "Forest with a Small Lake",
      "forest_with_a_small_lake.webp"
    ),
    categories: ["Forest", "Lake"],
    description: "Tranquil lake nestled in the middle of a quiet forest.",
    dimensions: { width: 4200, height: 2800 },
    gridSize: 140,
    active: false,
    isFavorited: [1],
    type: "subscribe",
  },
  {
    title: "Magical Store within City",
    image: generateImagePath(
      "Magical Store within City",
      "magical_store_within_city.webp"
    ),
    categories: ["City", "Store", "Magic"],
    description: "A mystical shop located deep in a fantasy city district.",
    dimensions: { width: 2800, height: 2100 },
    gridSize: 140,
    active: true,
    isFavorited: [4],
    type: "subscribe",
  },
  {
    title: "A Beach Without any Structure",
    image: generateImagePath(
      "A Beach Without any Structure",
      "a_beach_without_any_structure.webp"
    ),
    categories: ["Beach", "Open"],
    description: "An open and empty beach, perfect for encounters or camps.",
    dimensions: { width: 4000, height: 2800 },
    gridSize: 140,
    active: true,
    isFavorited: [6],
    type: "free",
  },
  {
    title:
      "Greek Style City Center with a Fountain as Middle Part Top Version 1",
    image: generateImagePath(
      "Greek Style City Center with a Fountain as Middle Part Top Version 1",
      "greek_style_city_center_with_a_fountain_as_middle_part_top_version_1.webp"
    ),
    categories: ["City", "Greek", "Fountain"],
    description: "A stone-paved Greek city center with a majestic fountain.",
    dimensions: { width: 4800, height: 3200 },
    gridSize: 140,
    active: false,
    isFavorited: [],
    type: "subscribe",
  },
  {
    title: "Spring Forest Road Map",
    image: generateImagePath(
      "Spring Forest Road Map",
      "spring_forest_road.webp"
    ),
    categories: ["Forest", "Spring", "Road"],
    description: "Vibrant forest road in full bloom during springtime.",
    dimensions: { width: 4200, height: 2800 },
    gridSize: 140,
    active: true,
    isFavorited: [],
    type: "free",
  },
  {
    title: "A Small Village Top Version 2",
    image: generateImagePath(
      "A Small Village Top Version 2",
      "a_small_village_top_version_2.webp"
    ),
    categories: ["Village", "Top View"],
    description: "Overhead view of a peaceful and compact village.",
    dimensions: { width: 3800, height: 2600 },
    gridSize: 140,
    active: true,
    isFavorited: [],
    type: "subscribe",
  },
  {
    title: "Forest Opening",
    image: generateImagePath("Forest Opening", "forest_opening.webp"),
    categories: ["Forest", "Clearing"],
    description: "A spacious clearing deep within a dense forest.",
    dimensions: { width: 4200, height: 2800 },
    gridSize: 140,
    active: true,
    isFavorited: [],
    type: "free",
  },
  {
    title: "Church within Forest",
    image: generateImagePath(
      "Church within Forest",
      "church_within_forest.webp"
    ),
    categories: ["Church", "Forest"],
    description: "An old church hidden away in the middle of a forest.",
    dimensions: { width: 4000, height: 3000 },
    gridSize: 140,
    active: false,
    isFavorited: [],
    type: "subscribe",
  },
];
