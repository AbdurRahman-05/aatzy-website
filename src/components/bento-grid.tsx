"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Heart, ArrowUpRight, Sparkles } from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  category: string;
  artist: string;
  price: string;
  img: string;
  gridClass: string;
}

const ARTWORKS_DATA: Artwork[] = [
  {
    id: 1,
    title: "Nebula Glass Core",
    category: "3D Renders",
    artist: "Aetherius",
    price: "1.89 ETH",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    gridClass: "lg:col-span-2 lg:row-span-2 h-[450px] lg:h-[550px]",
  },
  {
    id: 2,
    title: "Liquid Amber Flow",
    category: "Aether-punk",
    artist: "Solaria",
    price: "2.40 ETH",
    img: "https://images.unsplash.com/photo-1618005198143-d5182041d187?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 h-[260px]",
  },
  {
    id: 3,
    title: "Neon Wireframe Grid",
    category: "Generative",
    artist: "VoxelPrime",
    price: "0.95 ETH",
    img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 h-[260px]",
  },
  {
    id: 4,
    title: "Synthetic Shell structure",
    category: "3D Renders",
    artist: "XenoMinds",
    price: "3.20 ETH",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 lg:row-span-2 h-[450px] lg:h-[550px]",
  },
  {
    id: 5,
    title: "Digital Holo-Shield",
    category: "Generative",
    artist: "Aetherius",
    price: "1.50 ETH",
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    gridClass: "lg:col-span-2 h-[260px]",
  },
  {
    id: 6,
    title: "Liquid Chrome Sphere",
    category: "Surrealism",
    artist: "Solaria",
    price: "2.10 ETH",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 h-[260px]",
  },
];

const CATEGORIES = ["All", "3D Renders", "Generative", "Aether-punk", "Surrealism"];

export default function BentoGrid() {
  const [filter, setFilter] = useState("All");
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredArtworks = ARTWORKS_DATA.filter(
    (art) => filter === "All" || art.category === filter
  );

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="collections" className="relative w-full py-24 bg-[#030303] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold text-indigo-400">
              <Sparkles className="h-3.5 w-3.5" />
              Curated Masterpieces
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Featured Exhibitions
            </h2>
            <p className="text-zinc-400 font-light text-sm">
              Discover unique digital tokens representing premium high-end 3D creations, generative algorithms, and surreal environments from the world's leading creators.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider font-semibold">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "border-amber-400 bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                    : "border-white/10 bg-white/5 hover:border-white/20 text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art) => (
              <BentoCard
                key={art.id}
                art={art}
                isLiked={!!likes[art.id]}
                onLike={(e) => toggleLike(art.id, e)}
                isHovered={hoveredCard === art.id}
                onHoverStart={() => setHoveredCard(art.id)}
                onHoverEnd={() => setHoveredCard(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// Subcomponent: Bento Card with interactive spotlight and hover overlay
interface BentoCardProps {
  art: Artwork;
  isLiked: boolean;
  onLike: (e: React.MouseEvent) => void;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function BentoCard({
  art,
  isLiked,
  onLike,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c0c] cursor-pointer ${art.gridClass}`}
    >
      {/* Background spotlight overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 rounded-3xl z-10"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(245,158,11,0.1) 0%, rgba(99,102,241,0.05) 50%, transparent 80%)`,
          }}
        />
      )}

      {/* Image with zoom transition */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src={art.img}
          alt={art.title}
          className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-700"
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Lighting/Glow Border */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-amber-400/20 transition-colors duration-500" />

      {/* Header overlays (Category & Like) */}
      <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-auto">
        <span className="text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 text-zinc-300">
          {art.category}
        </span>
        <button
          onClick={onLike}
          className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${
            isLiked
              ? "bg-rose-500 border-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.3)]"
              : "bg-black/60 border-white/5 text-zinc-400 hover:text-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-white" : ""}`} />
        </button>
      </div>

      {/* Info overlay footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black via-black/75 to-transparent pt-20">
        <div className="flex justify-between items-end">
          <div className="space-y-1.5">
            <p className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
              <span>by</span> <span className="hover:underline text-white font-bold">{art.artist}</span>
            </p>
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              {art.title}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">Reserve Price</span>
            <span className="text-sm font-black text-white">{art.price}</span>
          </div>
        </div>

        {/* Action Reveal Panel (appears on hover) */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden mt-4 pt-4 border-t border-white/10 flex justify-between items-center"
        >
          <span className="text-[11px] text-zinc-400 font-medium">Secondary royalty: 10%</span>
          <button className="flex items-center gap-1 bg-white hover:bg-zinc-200 text-black text-xs font-bold px-4 py-2 rounded-full transition-colors">
            Place Bid <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
