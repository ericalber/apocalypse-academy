// Authentication Service
// This service handles user authentication, registration, and session management

import { useState, useEffect, createContext, useContext } from 'react';

// Create Authentication Context
const AuthContext = createContext(null);

// Authentication Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('apocalypseUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user data', e);
        localStorage.removeItem('apocalypseUser');
      }
    }
    setLoading(false);
  }, []);

  // Register a new user
  const register = async (email, password, name) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call an API endpoint
      // For now, we'll simulate a successful registration
      const newUser = {
        id: `user_${Date.now()}`,
        email,
        name,
        role: 'member',
        memberSince: new Date().toISOString(),
        subscriptionStatus: 'active',
        subscriptionTier: 'basic'
      };
      
      // Store user in localStorage (in a real app, this would be a JWT token)
      localStorage.setItem('apocalypseUser', JSON.stringify(newUser));
      setCurrentUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.message || 'Failed to register');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Login an existing user
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call an API endpoint
      // For now, we'll simulate a successful login
      
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user = {
        id: 'user_123456',
        email,
        name: 'Membro Apocalypse',
        role: 'member',
        memberSince: '2025-01-15T00:00:00.000Z',
        subscriptionStatus: 'active',
        subscriptionTier: 'premium'
      };
      
      // Store user in localStorage (in a real app, this would be a JWT token)
      localStorage.setItem('apocalypseUser', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    } catch (err) {
      setError(err.message || 'Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout the current user
  const logout = () => {
    localStorage.removeItem('apocalypseUser');
    setCurrentUser(null);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call an API endpoint
      const updatedUser = { ...currentUser, ...userData };
      
      // Store updated user in localStorage
      localStorage.setItem('apocalypseUser', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message || 'Failed to update profile');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Check if user has access to specific content
  const hasAccess = (contentType, contentId) => {
    if (!currentUser) return false;
    
    // Basic access check based on subscription tier
    switch (currentUser.subscriptionTier) {
      case 'premium':
        // Premium users have access to everything
        return true;
      case 'standard':
        // Standard users have access to everything except premium content
        return contentType !== 'premium-exclusive';
      case 'basic':
        // Basic users have limited access
        return ['free', 'basic'].includes(contentType);
      default:
        return false;
    }
  };

  // Context value
  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout,
    updateProfile,
    hasAccess
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default { AuthProvider, useAuth };
