import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_FILE = path.join(__dirname, 'blogs.json');
const MAX_BLOGS = 10;

const POSSIBLE_TOPICS = [
  "persoonlijke leningen in Nederland",
  "verantwoord lenen",
  "schuldbeheer",
  "kredietscore verbeteren",
  "lening vergelijken",
  "rente en looptijd uitleg",
  "lening aflossen tips",
  "budgetteren voor leningen",
  "risico's bij lenen",
  "financiële planning"
];

// Zorg dat blogs.json bestaat en correct is geïnitialiseerd
if (!fs.existsSync(BLOGS_FILE)) {
  fs.writeFileSync(BLOGS_FILE, JSON.stringify({ blogs: [], usedTopics: [] }, null, 2), 'utf8');
}

// Functie om alle data (blogs en usedTopics) te laden
function loadData() {
  try {
    const raw = fs.readFileSync(BLOGS_FILE, 'utf8');
    const data = JSON.parse(raw);
    return {
      blogs: Array.isArray(data.blogs) ? data.blogs : [],
      usedTopics: Array.isArray(data.usedTopics) ? data.usedTopics : []
    };
  } catch (error) {
    console.error("Fout bij het laden van data, bestand mogelijk corrupt of leeg:", error);
    return { blogs: [], usedTopics: [] };
  }
}

// Functie om alle data (blogs en usedTopics) op te slaan
function saveData(data) {
  fs.writeFileSync(BLOGS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// ---- jouw routes ----

app.post("/api/blogs", (req, res) => {
  const { title, content, meta, keywords, topic } = req.body || {};

  if (!req.body || Object.keys(req.body).length === 0) {
    console.error("❌ Lege body ontvangen!");
    return res.status(400).json({ error: "Geen data ontvangen — controleer of n8n JSON verstuurt." });
  }

  if (!title || !content) {
    return res.status(400).json({ error: "title en content zijn verplicht" });
  }

  let data = loadData();
  let blogs = data.blogs;

  const newBlog = {
    id: Date.now(),
    title,
    content,
    meta,
    keywords,
    topic: topic || "onbekend",
    createdAt: new Date().toISOString()
  };

  blogs.unshift(newBlog); // Voeg nieuwste blog bovenaan toe

  // Zorg ervoor dat er maximaal MAX_BLOGS bewaard blijven
  if (blogs.length > MAX_BLOGS) {
    blogs = blogs.slice(0, MAX_BLOGS);
  }

  data.blogs = blogs;
  saveData(data);
  console.log("Nieuw blog ontvangen en opgeslagen:", newBlog.title);

  res.status(201).json({ message: "Blog opgeslagen!", blog: newBlog });
});

app.get("/api/blogs", (req, res) => {
  const data = loadData();
  res.json(data.blogs);
});

app.get("/api/next-topic", (req, res) => {
  let data = loadData();
  let usedTopics = data.usedTopics;

  // Filter om ongebruikte te vinden
  let available = POSSIBLE_TOPICS.filter(t => !usedTopics.includes(t));

  // Alles gebruikt? Reset de lijst
  if (available.length === 0) {
    usedTopics = [];
    available = [...POSSIBLE_TOPICS];
  }

  // Kies random onderwerp
  const topic = available[Math.floor(Math.random() * available.length)];
  usedTopics.push(topic);
  data.usedTopics = usedTopics;
  saveData(data);

  res.json({
    topic,
    usedTopics: usedTopics // Stuur de bijgewerkte lijst met gebruikte topics mee
  });
});

app.delete("/api/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  let data = loadData();
  let blogs = data.blogs;

  const initialLength = blogs.length;
  blogs = blogs.filter(blog => blog.id !== blogId);

  if (blogs.length < initialLength) {
    data.blogs = blogs;
    saveData(data);
    console.log(`Blog met ID ${blogId} verwijderd.`);
    res.status(200).json({ message: `Blog met ID ${blogId} verwijderd.` });
  } else {
    res.status(404).json({ error: `Blog met ID ${blogId} niet gevonden.` });
  }
});

app.listen(3001, () => console.log("Backend draait op http://localhost:3001"));