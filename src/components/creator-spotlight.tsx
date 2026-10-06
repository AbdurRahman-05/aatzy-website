"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Plus, Users, Award, Flame, Sparkles } from "lucide-react";

interface Creator {
  id: number;
  name: string;
  realName: string;
  bio: string;
  avatar: string;
  artPreview: string;
  followers: string;
  volume: string;
  pieces: number;
}

const CREATORS: Creator[] = [
  {
    id: 1,
    name: "Aetherius",
    realName: "Marcus Vance",
    bio: "Synthesizing light codes into responsive geometric topologies and refractive structures.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    artPreview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    followers: "128K",
    volume: "420 ETH",
    pieces: 42,
  },
  {
    id: 2,
    name: "Solaria",
    realName: "Elena Rostova",
    bio: "Exploring high-contrast digital impressionism, auroral gradients, and fluid color physics.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    artPreview: "https://images.unsplash.com/photo-1618005198143-d5182041d187?auto=format&fit=crop&w=400&q=80",
    followers: "94K",
    volume: "290 ETH",
    pieces: 31,
  },
  {
    id: 3,
    name: "VoxelPrime",
    realName: "Tyler Chen",
    bio: "Deconstructing physical structures to reassemble them in cyberpunk wireframes and neon matrices.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    artPreview: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80",
    followers: "81K",
    volume: "310 ETH",
    pieces: 56,
  },
  {
    id: 4,
    name: "XenoMinds",
    realName: "Dr. Sarah Kim",
    bio: "Pioneering generative art models inspired by organic biology, cell division, and mathematical growth.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    artPreview: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80",
    followers: "145K",
    volume: "650 ETH",
    pieces: 89,
  },
];

export default function CreatorSpotlight() {
  const [followed, setFollowed] = useState<Record<number, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleFollow = (id: number) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="artists" className="relative w-full py-24 bg-[#020202] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-1.5 text-xs font-semibold text-purple-400">
              <Sparkles className="h-3.5 w-3.5" />
              Visionaries of the Realm
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Meet the Creators
            </h2>
            <p className="text-zinc-400 font-light text-sm">
              Discover the digital artists shaping the future of global creative commerce. Swipe or drag to browse their profiles, statistics, and curated expressions.
            </p>
          </div>
        </div>

        {/* Drag-scrollable creator showcase */}
        <motion.div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide cursor-grab active:cursor-grabbing pointer-events-auto"
          whileTap={{ cursor: "grabbing" }}
        >
          {CREATORS.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              isFollowed={!!followed[creator.id]}
              onFollow={() => toggleFollow(creator.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Subcomponent: Creator Profile Card
interface CreatorCardProps {
  creator: Creator;
  isFollowed: boolean;
  onFollow: () => void;
}

function CreatorCard({ creator, isFollowed, onFollow }: CreatorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-shrink-0 w-[300px] md:w-[360px] bg-[#0c0c0c] border border-white/[0.06] hover:border-indigo-500/30 rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl relative group"
    >
      {/* Top Banner Artwork Preview */}
      <div className="h-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={creator.artPreview}
          alt={`${creator.name} artwork`}
          className="w-full h-full object-cover filter blur-[2px] scale-105 group-hover:scale-110 group-hover:blur-0 transition-all duration-750"
        />
        {/* Glow light effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10" />
      </div>

      {/* Profile Details Container */}
      <div className="px-6 pb-6 relative z-20 -mt-10">
        <div className="flex justify-between items-end mb-4">
          {/* Avatar */}
          <div className="h-20 w-20 rounded-2xl border-4 border-[#0c0c0c] overflow-hidden bg-zinc-900 shadow-xl">
            <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
          </div>

          {/* Follow Button */}
          <button
            onClick={onFollow}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1 cursor-pointer ${
              isFollowed
                ? "bg-indigo-500/10 border border-indigo-500 text-indigo-400"
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            {isFollowed ? "Following" : <><Plus className="h-3 w-3" /> Follow</>}
          </button>
        </div>

        {/* Identity & Bio */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
              {creator.name}
            </h3>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
            {creator.realName}
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed min-h-[50px]">
            {creator.bio}
          </p>
        </div>

        {/* Creator Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 mt-6 border-t border-white/[0.04] text-center">
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-0.5">
              <Users className="h-2.5 w-2.5 text-zinc-500" /> Fans
            </span>
            <p className="text-xs font-black text-white">{creator.followers}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-0.5">
              <Flame className="h-2.5 w-2.5 text-zinc-500" /> Vol
            </span>
            <p className="text-xs font-black text-white">{creator.volume}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-0.5">
              <Award className="h-2.5 w-2.5 text-zinc-500" /> Minted
            </span>
            <p className="text-xs font-black text-white">{creator.pieces}</p>
          </div>
        </div>
      </div>
      
      {/* Background sliding accent light */}
      <div className="absolute inset-0 w-full h-full border border-white/5 rounded-3xl pointer-events-none group-hover:border-indigo-500/20 transition-all duration-500" />
    </div>
  );
}
