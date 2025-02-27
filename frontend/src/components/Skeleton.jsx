// Animated placeholder while data loads
<motion.div 
  className="h-8 bg-gray-200 rounded"
  initial={{ opacity: 0.5 }}
  animate={{ opacity: 1 }}
  transition={{ repeat: Infinity, duration: 1 }}
/>