"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingBag, Sparkles, Send, ArrowRight, Clock, Eye, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  artist: string;
  priceUSD: number;
  priceCrypto: string;
  edition: string;
  type: string;
  img: string;
  tag?: string;
  timeLeft?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 101,
    title: "Chroma Lattice",
    artist: "VoxelPrime",
    priceUSD: 1450,
    priceCrypto: "0.45 ETH",
    edition: "Limited Edition (1 of 10)",
    type: "Cyberpunk",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80",
    tag: "Trending",
    timeLeft: "04h 12m",
  },
  {
    id: 102,
    title: "Aetherial Fluidity V",
    artist: "Solaria",
    priceUSD: 3200,
    priceCrypto: "1.10 ETH",
    edition: "Exclusive (1 of 1)",
    type: "Minimalist",
    img: "https://images.unsplash.com/photo-1618005198143-d5182041d187?auto=format&fit=crop&w=400&q=80",
    tag: "Rare",
    timeLeft: "12h 45m",
  },
  {
    id: 103,
    title: "Geometric Shell II",
    artist: "XenoMinds",
    priceUSD: 980,
    priceCrypto: "0.32 ETH",
    edition: "Open Edition",
    type: "Bio-Organic",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 104,
    title: "Hyper-Dimensional Portal",
    artist: "Aetherius",
    priceUSD: 4500,
    priceCrypto: "1.50 ETH",
    edition: "Exclusive (1 of 1)",
    type: "Surrealism",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
    tag: "Curator's Choice",
    timeLeft: "01h 05m",
  },
  {
    id: 105,
    title: "Super-Position Shape",
    artist: "Aetherius",
    priceUSD: 1800,
    priceCrypto: "0.58 ETH",
    edition: "Limited Edition (1 of 5)",
    type: "Bio-Organic",
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 106,
    title: "Glitch Dreamscape",
    artist: "VoxelPrime",
    priceUSD: 1250,
    priceCrypto: "0.39 ETH",
    edition: "Limited Edition (1 of 15)",
    type: "Cyberpunk",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
    tag: "New",
  },
];

// Recently sold items ticker data
const RECENT_SALES = [
  { title: "Quantum Spheres", artist: "Solaria", price: "2.1 ETH", buyer: "0x7a...d92" },
  { title: "Synthetic Lattice", artist: "VoxelPrime", price: "0.9 ETH", buyer: "0xec...241" },
  { title: "Bio Membrane #4", artist: "XenoMinds", price: "3.4 ETH", buyer: "0xf8...81a" },
  { title: "Aether-Wave #12", artist: "Aetherius", price: "1.6 ETH", buyer: "0x12...c29" },
];

export default function Marketplace() {
  const [selectedType, setSelectedType] = useState("All");
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState<string>("Hello, I am AATZY Curator AI. Describe the mood, color, or theme of art you are seeking, and I will recommend our most elite tokens.");
  const [aiSuggestions, setAiSuggestions] = useState<Product[]>([]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedType === "All" || p.type === selectedType
  );

  // Handle AI Curator suggestion triggers
  const handleAiSearch = (promptText: string) => {
    if (!promptText.trim()) return;
    setIsAiTyping(true);
    setAiResponse("Scanning database for matching aesthetics...");
    
    setTimeout(() => {
      const query = promptText.toLowerCase();
      let matched: Product[] = [];
      let reply = "";

      if (query.includes("cyber") || query.includes("glow") || query.includes("neon")) {
        matched = PRODUCTS.filter(p => p.type === "Cyberpunk");
        reply = "I found 2 stunning artworks incorporating high-intensity neon lattices, wireframe arrays, and cyberpunk retro-futurism.";
      } else if (query.includes("gold") || query.includes("minimal") || query.includes("amber")) {
        matched = PRODUCTS.filter(p => p.type === "Minimalist");
        reply = "I have curated this golden liquid minimal artwork. It represents high-end color physics and flowing luxury textures.";
      } else if (query.includes("organic") || query.includes("cell") || query.includes("bio")) {
        matched = PRODUCTS.filter(p => p.type === "Bio-Organic");
        reply = "Here are bio-organic generative sculptures matching structural cellular aesthetics.";
      } else {
        matched = [PRODUCTS[3]]; // Hyper-Dimensional Portal
        reply = "I recommend our premier Surrealism piece, reflecting deep cosmic coordinates and high-resolution color fields.";
      }

      setAiResponse(reply);
      setAiSuggestions(matched);
      setIsAiTyping(false);
    }, 1200);
  };

  return (
    <section id="marketplace" className="relative w-full py-24 bg-[#050505] text-white border-t border-white/[0.04]">
      
      {/* Recently Sold Ticker */}
      <div className="w-full bg-[#090909] border-y border-white/[0.03] py-3.5 mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5 flex-shrink-0 mr-8">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" /> Live Sales Ticker
          </span>
          <div className="flex gap-12 animate-marquee whitespace-nowrap overflow-x-auto scrollbar-hide text-xs text-zinc-400">
            {RECENT_SALES.map((sale, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-white font-semibold">"{sale.title}"</span> by <span className="text-zinc-300">{sale.artist}</span> sold for <span className="text-amber-400 font-bold">{sale.price}</span> to <span className="font-mono text-[11px] bg-white/5 px-1.5 py-0.5 rounded">{sale.buyer}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Shop Grid and Filters */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Interactive Marketplace</h2>
              <p className="text-zinc-500 text-xs mt-1">Direct cryptographic acquisition of premium digital canvases</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide text-[11px] uppercase tracking-wider font-semibold">
              {["All", "Cyberpunk", "Minimalist", "Bio-Organic"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    selectedType === type
                      ? "border-indigo-500 bg-indigo-500/10 text-white"
                      : "border-white/5 bg-white/5 text-zinc-500 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#0c0c0c] border border-white/[0.05] hover:border-white/10 rounded-2xl p-4 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  {/* Image Display */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-950 mb-4">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Badge */}
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-indigo-600/90 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm shadow-md">
                        {product.tag}
                      </span>
                    )}

                    {/* Auction Countdown Timer */}
                    {product.timeLeft && (
                      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-amber-400 flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {product.timeLeft}
                      </div>
                    )}
                  </div>

                  {/* Title & Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{product.title}</h4>
                        <p className="text-[10px] text-zinc-500 font-semibold">by {product.artist}</p>
                      </div>
                      <span className="text-xs font-bold text-white bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                        {product.priceCrypto}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-zinc-400 pt-2 border-t border-white/[0.04]">
                      <span>{product.edition}</span>
                      <span className="font-semibold text-zinc-300">${product.priceUSD.toLocaleString()}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1">
                        <ShoppingBag className="h-3.5 w-3.5" /> Acquire
                      </button>
                      <button className="px-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-zinc-400 hover:text-white transition-all duration-200">
                        <ShoppingCart className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Side: Ant Design X inspired AI Curator Panel */}
        <div className="lg:col-span-4 flex flex-col h-full justify-between">
          <div className="bg-[#0c0c0c] border border-white/[0.06] rounded-3xl p-6 relative flex flex-col justify-between h-[600px] sticky top-24">
            
            {/* Header */}
            <div className="space-y-2 pb-4 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </div>
                <h3 className="text-sm font-extrabold text-white tracking-wider uppercase">AATZY AI Curator</h3>
              </div>
              <p className="text-[10px] text-zinc-500 leading-normal">
                An intelligent generative search companion designed to recommend digital art tokens based on emotional cues.
              </p>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 py-4 overflow-y-auto space-y-4 scrollbar-hide text-xs">
              {/* Bot Message */}
              <div className="space-y-1.5 max-w-[85%]">
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">AATZY CURATOR</p>
                <div className="bg-[#111111] border border-white/[0.04] p-3.5 rounded-2xl text-zinc-300 leading-relaxed">
                  {aiResponse}
                </div>
              </div>

              {/* Dynamic Suggestions List */}
              {aiSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-widest">RECOMMENDED TOKENS</p>
                  <div className="space-y-2">
                    {aiSuggestions.map((rec) => (
                      <div key={rec.id} className="flex items-center gap-3 p-2 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <img src={rec.img} alt={rec.title} className="h-10 w-10 object-cover rounded-lg" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[11px] font-bold text-white truncate">{rec.title}</h4>
                          <p className="text-[9px] text-zinc-400 truncate">by {rec.artist} • {rec.priceCrypto}</p>
                        </div>
                        <button className="text-[10px] font-bold text-indigo-400 hover:text-white bg-indigo-500/10 px-2.5 py-1 rounded-lg">
                          Bid
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {isAiTyping && (
                <div className="flex gap-1.5 items-center pl-1">
                  <span className="h-1.5 w-1.5 bg-zinc-500 rounded-full animate-bounce" />
                  <span className="h-1.5 w-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input Form & Preset Queries */}
            <div className="space-y-4 pt-4 border-t border-white/[0.05]">
              {/* Preset buttons */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => { setAiPrompt("Find me a cyber neon artwork"); handleAiSearch("Find me a cyber neon artwork"); }}
                  className="text-[9px] bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white px-2.5 py-1 rounded-full cursor-pointer transition-colors"
                >
                  ⚡ Cyber Neon
                </button>
                <button
                  onClick={() => { setAiPrompt("Show gold minimal fluidity"); handleAiSearch("Show gold minimal fluidity"); }}
                  className="text-[9px] bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white px-2.5 py-1 rounded-full cursor-pointer transition-colors"
                >
                  ⚜️ Gold Fluid
                </button>
                <button
                  onClick={() => { setAiPrompt("Show bio organic shapes"); handleAiSearch("Show bio organic shapes"); }}
                  className="text-[9px] bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white px-2.5 py-1 rounded-full cursor-pointer transition-colors"
                >
                  🧬 Bio Organic
                </button>
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAiSearch(aiPrompt);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Describe your design vibe..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl py-3 pl-3 pr-12 text-xs text-white placeholder:text-zinc-600 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
