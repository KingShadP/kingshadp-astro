export type HouseRoute = {
	href: string;
	label: string;
	room: string;
	description: string;
};

export type ArchiveItem = {
	title: string;
	category: string;
	image: string;
	year: string;
	description: string;
	status?: string;
	featured?: boolean;
	wide?: boolean;
};

export const contactEmail = "kshadp@gmail.com";

export const houseRoutes: HouseRoute[] = [
	{ href: "/music", label: "Music", room: "Sonic Room", description: "Releases, lyrics, demos, and sound direction." },
	{ href: "/visuals", label: "Visuals", room: "Visual Room", description: "Campaigns, photography, symbols, garments, and motion." },
	{ href: "/oracle", label: "Oracle", room: "Oracle", description: "Lyrics, statements, fragments, and creative philosophy." },
	{ href: "/world", label: "World", room: "The World", description: "Giragon, SP Crest, marks, meanings, and house rules." },
	{ href: "/drops", label: "Drops", room: "Drop Vault", description: "Garments, artifacts, concepts, and limited objects." },
	{ href: "/about", label: "About", room: "About KingShadP", description: "The artist, the work, the standard, and the official language." },
	{ href: "/contact", label: "Contact", room: "Contact", description: "Press, booking, collaboration, partnerships, and serious inquiries." },
];

export const backgrounds = {
	home: "/images/backgrounds/bg-house-hero",
	music: "/images/backgrounds/bg-sonic-room",
	visuals: "/images/backgrounds/bg-visual-room",
	oracle: "/images/backgrounds/bg-oracle",
	world: "/images/backgrounds/bg-world",
	drops: "/images/backgrounds/bg-drops",
	about: "/images/backgrounds/bg-about",
	contact: "/images/backgrounds/bg-contact",
};

export const visualItems: ArchiveItem[] = [
	{
		title: "Giragon Collection",
		category: "Editorial",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_42 AM (1).png",
		year: "2026",
		description: "A restrained apparel study placing the Giragon mark at the center.",
		featured: true,
	},
	{
		title: "Blue Room",
		category: "Garments",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_42 AM (2).png",
		year: "2026",
		description: "Color and silhouette testing for the first apparel language.",
	},
	{
		title: "Campaign Portrait",
		category: "Editorial",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_42 AM (3).png",
		year: "2026",
		description: "Close editorial framing built around the music-facing mark.",
	},
	{
		title: "Seated Study",
		category: "Campaigns",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_42 AM (4).png",
		year: "2026",
		description: "A campaign frame exploring posture, quiet confidence, and product scale.",
	},
	{
		title: "Walking Frame",
		category: "Campaigns",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_42 AM (5).png",
		year: "2026",
		description: "Walking study for product-led visual storytelling.",
	},
	{
		title: "Giragon Detail",
		category: "Symbols",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_43 AM (6).png",
		year: "2026",
		description: "The central creature mark shown at close range.",
	},
	{
		title: "Wall Portrait",
		category: "Editorial",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_43 AM (7).png",
		year: "2026",
		description: "A quieter frame for campaign pacing and negative space.",
	},
	{
		title: "Studio Blue",
		category: "Garments",
		image: "/images/media-pool/ChatGPT Image Jun 3, 2026, 03_13_43 AM (8).png",
		year: "2026",
		description: "A second colorway study for the Giragon collection.",
	},
	{
		title: "Black House",
		category: "Campaigns",
		image: "/images/media-pool/ChatGPT Image May 14, 2026, 10_06_04 PM (1).png",
		year: "2026",
		description: "A formal campaign environment built around black, bronze, and the SP seal.",
		wide: true,
	},
	{
		title: "Yacht Study",
		category: "Campaigns",
		image: "/images/media-pool/ChatGPT Image May 14, 2026, 10_06_46 PM (3).png",
		year: "2026",
		description: "Night exterior direction for the formal side of the house.",
	},
	{
		title: "Gallery Study",
		category: "Artifacts",
		image: "/images/media-pool/ChatGPT Image May 14, 2026, 10_06_46 PM (4).png",
		year: "2026",
		description: "The Giragon treated as an object with weight and presence.",
	},
	{
		title: "Formal House",
		category: "Editorial",
		image: "/images/media-pool/ChatGPT Image May 15, 2026, 12_03_35 AM (4).png",
		year: "2026",
		description: "Formalwear direction using the house palette and symbol system.",
	},
];

export const oracleEntries = [
	{
		title: "The House Has Rules",
		type: "Statement",
		date: "June 2026",
		excerpt: "Clarity before mystery. Music before mythology. The mark means more when the work beneath it is real.",
		tags: ["House rules", "Identity"],
		featured: true,
	},
	{
		title: "The Oracle Is Not Advice",
		type: "Fragment",
		date: "May 2026",
		excerpt: "It is the archive speaking back. Some entries are memory. Some are warning. Some are truth wearing a mask.",
		tags: ["Oracle", "Fragments"],
	},
	{
		title: "Pressure Becomes Form",
		type: "Creative philosophy",
		date: "May 2026",
		excerpt: "The work begins where pressure, ambition, vulnerability, and discipline stop fighting each other.",
		tags: ["Process", "Discipline"],
	},
	{
		title: "Music Is The Signal",
		type: "World note",
		date: "May 2026",
		excerpt: "The images, symbols, rooms, and objects have a center. The center is sound.",
		tags: ["Music", "World"],
	},
	{
		title: "A Mark Must Earn Its Meaning",
		type: "Statement",
		date: "April 2026",
		excerpt: "A crest cannot replace identity. A crown cannot create authority. Repetition without reason weakens the symbol.",
		tags: ["Symbols", "Standards"],
	},
	{
		title: "Official Intelligence",
		type: "Document",
		date: "2026",
		excerpt: "A longer written record of the ideas, language, and internal logic behind KingShadP.",
		tags: ["Document", "Official"],
	},
];

export const symbols = [
	{
		name: "Giragon",
		image: "/images/giragon.png",
		meaning: "The guardian of the house: watchful, composed, and built from contradiction.",
		usage: "Primary creature mark, motion guardian, campaign symbol.",
		rules: "Use with space. Never reduce it to filler. Avoid stacking it beside multiple crowns.",
	},
	{
		name: "SP Crest",
		image: "/images/00_SOURCE_SP_CREST_TRANSPARENT.png",
		meaning: "The official seal used when the house needs authority rather than spectacle.",
		usage: "Press materials, formal objects, documents, and restrained apparel placement.",
		rules: "One crest per composition. Preserve clear space. Do not invent alternate shields.",
	},
	{
		name: "KingShadP Signature",
		image: "/images/01_BACK_SIGNATURE_CROWNED_STANDALONE_ONLY_3513x2340_300DPI_TRANSPARENT.png",
		meaning: "The personal identity marker: direct, human, and connected to the artist.",
		usage: "Editorial signatures, release notes, select garments, and artist-led communication.",
		rules: "Keep the line work readable. Use the crown only in the approved single-crown version.",
	},
];

export const drops = [
	{
		name: "Dragon Journal",
		type: "Artifact",
		status: "Concept",
		image: "/images/ksp_item_01_black_leather_dragon_journal_transparent.png",
		description: "A black leather writing object carrying the Giragon mark.",
		meaning: "The written side of the house made physical.",
	},
	{
		name: "Presentation Box",
		type: "Packaging",
		status: "In development",
		image: "/images/ksp_item_02_luxury_presentation_box_transparent.png",
		description: "A formal presentation case for limited releases and documents.",
		meaning: "A controlled first encounter with an object from the house.",
	},
	{
		name: "SP Card",
		type: "Identity object",
		status: "Concept",
		image: "/images/ksp_item_03_embossed_sp_dragon_card_transparent.png",
		description: "An embossed calling card combining the seal and creature system.",
		meaning: "Contact made tangible.",
	},
	{
		name: "Bronze Medallion",
		type: "Collectible",
		status: "Archive",
		image: "/images/ksp_item_04_bronze_sp_medallion_transparent.png",
		description: "A weighty seal study designed as a collectible object.",
		meaning: "The official mark translated into material and weight.",
	},
	{
		name: "Velvet Pouch",
		type: "Packaging",
		status: "Concept",
		image: "/images/ksp_item_05_black_velvet_sp_pouch_transparent.png",
		description: "Protective packaging for small house objects.",
		meaning: "Restraint, protection, and reveal.",
	},
	{
		name: "Rose Gold Crown",
		type: "Artifact",
		status: "Archive",
		image: "/images/ksp_item_06_ornate_rose_gold_crown_transparent.png",
		description: "A crown study retained as an artifact rather than a repeated decoration.",
		meaning: "Authority used rarely enough to keep its force.",
	},
];

export const capabilities = [
	"Music creation and vocal direction",
	"Visual and campaign direction",
	"Writing, lyrics, and world language",
	"Symbol and identity systems",
	"Garment and artifact concepts",
	"Digital room and archive direction",
];

export const inquiryTypes = [
	"Music collaboration",
	"Press",
	"Booking",
	"Creative direction",
	"Visuals",
	"Partnerships",
	"Investment attention",
	"General inquiries",
];
