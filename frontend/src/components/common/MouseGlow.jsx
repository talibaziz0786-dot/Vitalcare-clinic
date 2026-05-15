import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function MouseGlow() {
  const mouseX =
    useMotionValue(0);

  const mouseY =
    useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - 150);

    mouseY.set(e.clientY - 150);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-0 hidden lg:block"
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none absolute h-75 w-75 rounded-full bg-cyan-500/10 blur-3xl"
      />
    </div>
  );
}