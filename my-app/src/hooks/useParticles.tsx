import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';



const useParticles = () => {
    const canvasRef = useRef(null);
      const sceneRef = useRef(null);
    
      // Three.js setup for background effect
      useEffect(() => {
        if (!canvasRef.current) return;
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
    
        // Create floating particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 100;
        const posArray = new Float32Array(particlesCount * 3);
    
        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10;
        }
    
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
          color: '#8b5cf6',
          transparent: true,
          opacity: 0.8
        });
    
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
    
        // Create geometric shapes
        const shapes = [];
        for (let i = 0; i < 5; i++) {
          const geometry = new THREE.OctahedronGeometry(0.1, 0);
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(0.6 + i * 0.1, 0.8, 0.6),
            wireframe: true,
            transparent: true,
            opacity: 0.3
          });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
          );
          shapes.push(mesh);
          scene.add(mesh);
        }
    
        camera.position.z = 5;
        sceneRef.current = { scene, camera, renderer, particlesMesh, shapes };
    
        const animate = () => {
          requestAnimationFrame(animate);
    
          // Rotate particles
          particlesMesh.rotation.y += 0.001;
          particlesMesh.rotation.x += 0.0005;
    
          // Animate shapes
          shapes.forEach((shape, index) => {
            shape.rotation.x += 0.01 + index * 0.001;
            shape.rotation.y += 0.01 + index * 0.001;
            shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
          });
    
          renderer.render(scene, camera);
        };
    
        animate();
    
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
      }, []);
  return (
    canvasRef
  )
}

export default useParticles