"use client";

import Link from "next/link";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome to Week 10</h1>

        {!user ? (
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Sign in to access the shopping list and features!
            </p>
            <button
              onClick={gitHubSignIn}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200"
            >
              Sign in with GitHub
            </button>
          </div>
        ) : (
          <div>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile Picture"
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
              />
            )}
            <p className="mb-4 text-lg text-white">
              Welcome, <span className="font-semibold">{user.displayName}</span>{" "}
              <br />
              <span className="text-gray-400 text-sm">({user.email})</span>
            </p>

            <Link
              href="/week-10/shopping-list"
              className="block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold mb-4 hover:bg-green-600 transition duration-200"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={firebaseSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
