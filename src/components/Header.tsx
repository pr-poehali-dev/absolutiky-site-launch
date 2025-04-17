import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white">ABSOLUTIKY</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-red-200 transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/rules" className="text-white hover:text-red-200 transition-colors">
                Правила
              </Link>
            </li>
            <li>
              <Link to="/members" className="text-white hover:text-red-200 transition-colors">
                Участники
              </Link>
            </li>
            <li>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-red-700">
                Присоединиться
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
