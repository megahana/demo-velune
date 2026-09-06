import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Velune — Le calme dans la complexité.',description:'Velune organise le travail de votre équipe, sans vous ajouter une tâche de plus.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
