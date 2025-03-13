"use client"

import { useEffect, useRef } from "react"

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid parameters
    const gridSize = 40
    const gridOpacity = 0.2

    // Particles parameters
    const particles: Particle[] = []
    const particleCount = 100

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${100 + Math.random() * 155}, ${150 + Math.random() * 105}, ${200 + Math.random() * 55}, ${0.3 + Math.random() * 0.7})`,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0f172a")
      gradient.addColorStop(1, "#1e293b")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      drawGrid(ctx, canvas.width, canvas.height, gridSize, gridOpacity)

      // Draw and update particles
      particles.forEach((particle) => {
        drawParticle(ctx, particle)
        updateParticle(particle, canvas.width, canvas.height)
      })

      // Draw glow effects
      drawGlowEffects(ctx, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="absolute inset-0 bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900"></div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  )
}

// Helper functions
function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, gridSize: number, opacity: number) {
  ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`
  ctx.lineWidth = 0.5

  // Vertical lines
  for (let x = 0; x <= width; x += gridSize) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }

  // Horizontal lines
  for (let y = 0; y <= height; y += gridSize) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.beginPath()
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
  ctx.fillStyle = particle.color
  ctx.fill()

  // Add glow effect
  ctx.shadowBlur = 10
  ctx.shadowColor = particle.color
  ctx.fill()
  ctx.shadowBlur = 0
}

function updateParticle(particle: Particle, width: number, height: number) {
  particle.x += particle.speedX
  particle.y += particle.speedY

  // Wrap around edges
  if (particle.x < 0) particle.x = width
  if (particle.x > width) particle.x = 0
  if (particle.y < 0) particle.y = height
  if (particle.y > height) particle.y = 0
}

function drawGlowEffects(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Draw some larger glowing circles at random positions
  const time = Date.now() * 0.001

  // First glow spot
  const x1 = width * (0.3 + 0.1 * Math.sin(time * 0.3))
  const y1 = height * (0.4 + 0.1 * Math.cos(time * 0.5))
  drawGlowSpot(ctx, x1, y1, 100 + 20 * Math.sin(time), "rgba(0, 150, 255, 0.1)")

  // Second glow spot
  const x2 = width * (0.7 + 0.1 * Math.sin(time * 0.5))
  const y2 = height * (0.6 + 0.1 * Math.cos(time * 0.3))
  drawGlowSpot(ctx, x2, y2, 120 + 30 * Math.sin(time * 0.7), "rgba(100, 100, 255, 0.1)")

  // Third glow spot
  const x3 = width * (0.5 + 0.2 * Math.sin(time * 0.2))
  const y3 = height * (0.2 + 0.1 * Math.cos(time * 0.4))
  drawGlowSpot(ctx, x3, y3, 80 + 20 * Math.sin(time * 0.5), "rgba(150, 100, 255, 0.1)")
}

function drawGlowSpot(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
  gradient.addColorStop(0, color)
  gradient.addColorStop(1, "rgba(0, 0, 50, 0)")

  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fill()
}

