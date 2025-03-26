import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
