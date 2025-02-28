import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { Link } from "react-scroll";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "MERN Stack Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      },
      currentRoleIndex === 0 || currentRoleIndex === roles.length - 1
        ? 4000
        : 2000
    );
    // "MERN Stack Developer" stays 4s, others 2s

    return () => clearInterval(interval);
  }, [currentRoleIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 20);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.1})`,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i !== j) {
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(66, 153, 225, ${
                0.1 * (1 - distance / 150)
              })`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        });

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resize);
    resize();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Iflaq</span>
          </h1>

          <div className="h-20 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-secondary transition-opacity duration-500">
            {roles[currentRoleIndex]}
          </div>

          <p className="mt-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={18} className="mr-2" />}
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <ArrowDown className="text-primary" size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
