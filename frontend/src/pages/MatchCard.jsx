// MatchList.jsx
import { motion } from 'framer-motion';

const MatchList = ({ isLoading, matches }) => {
  return (
    <div className="space-y-4">
      {isLoading ? (
        // Show 3 skeleton loaders
        [1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-24 bg-gray-200 rounded-xl"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        ))
      ) : (
        // Show actual matches
        matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))
      )}
    </div>
  );
};