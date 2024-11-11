// page.js
"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";

const MainPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome to Our App</h1>
        
        {user ? (
          <div className="text-white">
            {user.photoURL && (
              <img 
                src={user.photoURL} 
                alt="Profile Picture" 
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
              />
            )}
            <p className="mb-4 text-lg">
              Welcome, <span className="font-semibold">{user.displayName}</span> <br />
              <span className="text-gray-400 text-sm">({user.email})</span>
            </p>
            <button 
              onClick={handleSignOut} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={handleSignIn} 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Sign in with GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
