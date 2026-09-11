import type {Metadata} from 'next';
import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:'Velune — Le calme dans la complexité.',description:'Velune organise le travail de votre équipe, sans vous ajouter une tâche de plus.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
