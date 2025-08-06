import { LogOutIcon, ShoppingCart, History, ArrowLeft } from "lucide-react";
import { useAuth } from "../../app/contexts/hooks/useAuth";
import { Link } from "react-router-dom";
interface HeaderProps {
isHomePage?: boolean 
}

export function Header({ isHomePage = false }: HeaderProps) {
  const { singnout } = useAuth();

  return (
    <header className=" fixed bg-white shadow-sm border-b border-gray-100 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  gap-5">
            <Link to="/">
              <h1 className=" text-2xl font-bold" title="Shop">
                Stg Shop
              </h1>
            </Link>
            {!isHomePage && (
              <div
                onClick={() => window.history.back()}
                className="cursor-pointer"
                title="Voltar"
              >
                <ArrowLeft className="w-5 h-5" />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div
              onClick={() => (window.location.href = "/history")}
              className="cursor-pointer"
            >
              <button
                className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full hover:shadow-lg transition-all"
                title="Histórico"
              >
                <History className="w-6 h-6" />
              </button>
            </div>
            <div
              onClick={() => (window.location.href = "/cart")}
              className="cursor-pointer"
            >
              <button
                className="relative  cursor-pointer hover:bg-gray-100 p-2 rounded-full hover:shadow-lg transition-all"
                title="Carrinho"
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
            <button
              className="cursor-pointer hover:bg-gray-100 p-2 rounded-full hover:shadow-lg transition-all "
              title="Deslogar"
              onClick={singnout}
            >
              <LogOutIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
