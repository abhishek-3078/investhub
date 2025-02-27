// ChatPage.jsx
import React, { useEffect, useState } from 'react';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-config'; // Adjust the path as needed

export default function ChatPage({ conversationId, currentUserId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Subscribe to the messages subcollection for the given conversation in real time
  useEffect(() => {
    if (!conversationId) return; // Ensure conversationId is provided

    const messagesRef = collection(db, 'conversations', conversationId, 'messages');
    const q = query(messagesRef, orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        console.log("doc", doc);
        msgs.push({ id: doc.id, ...doc.data() });
      });
      console.log('Messages:', msgs);
      setMessages(msgs);
    });

    // Cleanup subscription on unmount or conversation change
    return () => unsubscribe();
  }, [conversationId]);

  // Function to send a message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || !conversationId) return;
    
    const messagesRef = collection(db, 'conversations', conversationId, 'messages');
    await addDoc(messagesRef, {
      text: input,
      timestamp: serverTimestamp(),
      senderId: currentUserId, // Identifier for sender (from your MongoDB user data)
    });
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Chat</h1>
      </header>
      
      <main className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-3 rounded-lg ${
              msg.senderId === currentUserId
                ? 'bg-blue-500 text-white self-end rounded-br-none'
                : 'bg-gray-200 text-gray-900 self-start rounded-bl-none'
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-300 block text-right mt-1">
              {msg.timestamp?.toDate().toLocaleTimeString() || ''}
            </span>
          </div>
        ))}
      </main>

      <footer className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <form onSubmit={sendMessage} className="flex items-center">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendMessage(e);
            }}
          />
          <button
            type="submit"
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
}
