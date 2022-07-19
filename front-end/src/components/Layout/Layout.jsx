import Navbar from "@/components/Navbar";
import styles from '@/styles/Layout.module.css'


export default function Layout({ children }) {
  return <div >
  
  <Navbar /> 
  <div>{children}</div>
  </div>
 
}
