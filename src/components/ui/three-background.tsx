"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles creation
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const randomsArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Coordinate generation (spread out in space)
      posArray[i] = (Math.random() - 0.5) * 12; // X
      posArray[i + 1] = (Math.random() - 0.5) * 12; // Y
      posArray[i + 2] = (Math.random() - 0.5) * 8; // Z
      
      randomsArray[i / 3] = Math.random();
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute("random", new THREE.BufferAttribute(randomsArray, 1));

    // Particle texture - create a round dot using Canvas
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);
    particleTexture.generateMipmaps = false;
    particleTexture.minFilter = THREE.LinearFilter;
    particleTexture.magFilter = THREE.LinearFilter;

    // Particles material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color("#14b8a6"), // Teal color
    });

    // Particle Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add a secondary system for glowing stars/dust
    const secondaryGeometry = new THREE.BufferGeometry();
    const secPosArray = new Float32Array(800 * 3);
    for (let i = 0; i < 800 * 3; i += 3) {
      secPosArray[i] = (Math.random() - 0.5) * 15;
      secPosArray[i + 1] = (Math.random() - 0.5) * 15;
      secPosArray[i + 2] = (Math.random() - 0.5) * 10;
    }
    secondaryGeometry.setAttribute("position", new THREE.BufferAttribute(secPosArray, 3));
    const secondaryMaterial = new THREE.PointsMaterial({
      size: 0.055,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color("#06b6d4"), // Cyan accent color
    });
    const secondaryMesh = new THREE.Points(secondaryGeometry, secondaryMaterial);
    scene.add(secondaryMesh);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const startTime = performance.now();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) / 1000;

      // Slow rotational animation
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = elapsedTime * 0.01;

      secondaryMesh.rotation.y = -elapsedTime * 0.02;
      secondaryMesh.rotation.z = elapsedTime * 0.01;

      // Make secondary mesh float in a wave-like motion (optimized globally on GPU)
      particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.15;
      secondaryMesh.position.y = Math.cos(elapsedTime * 0.4) * 0.1;

      // Mouse interactive camera movement
      targetX = mouseX * 1.5;
      targetY = -mouseY * 1.5;
      
      // Interpolate for smooth follow
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particleTexture.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      secondaryGeometry.dispose();
      secondaryMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[-1] overflow-hidden"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
