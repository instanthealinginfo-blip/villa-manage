import React, { useState, useEffect, useRef } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Home, Calendar as CalendarIcon, DollarSign, FileText, LogOut, Plus, X, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Download, Printer } from 'lucide-react';

// --- KONFIGURASI FIREBASE ANDA ---
const firebaseConfig = {
  apiKey: "AIzaSyDblFoe8zjjnF305zBlToeozMbaqnXD8B0",
  authDomain: "villapuncakbooking.firebaseapp.com",
  projectId: "villapuncakbooking",
  storageBucket: "villapuncakbooking.firebasestorage.app",
  messagingSenderId: "173255056370",
  appId: "1:173255056370:web:30ac7f197f1aa13ed9e96b",
  measurementId: "G-QBXL07DJ43"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "villapuncakbooking";

// ... (Sisa seluruh logika aplikasi dan antarmuka yang sudah kita finalkan sebelumnya) ...
// Aplikasi ini sekarang sudah tersambung permanen ke database Firebase Anda.