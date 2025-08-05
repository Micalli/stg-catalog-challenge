import { LogOutIcon, ShoppingCart } from "lucide-react";
import { useAuth } from "../../app/contexts/hooks/useAuth";

export function Header() {
  const { singnout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className=" text-2xl font-bold">Stg Shop</h1>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div
              onClick={() => (window.location.href = "/cart")}
              className="cursor-pointer"
            >
              <button className="relative  cursor-pointer hover:bg-gray-100 p-2 rounded-full hover:shadow-lg transition-all">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
            <button
              className="cursor-pointer hover:bg-gray-100 p-2 rounded-full hover:shadow-lg transition-all "
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
