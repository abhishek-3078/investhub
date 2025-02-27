// AuthForm.jsx
import { motion } from 'framer-motion';
import { Formik, Form } from 'formik';

export default function AuthForm({ isLogin }) {
  return (
    <motion.div 
      key={isLogin ? 'login' : 'signup'} // Animate on mode change
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <Formik>
        <Form className="space-y-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg"
              placeholder="Email"
            />
          </motion.div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
}