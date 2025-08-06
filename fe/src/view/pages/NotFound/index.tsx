import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {MapPinX} from "lucide-react"

export function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-md">
          {/* Ícone/Ilustração */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <MapPinX className=' w-16 h-16 text-gray-500'/>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

          {/* Subtítulo */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Página não encontrada
          </h2>

          {/* Descrição */}
          <p className="text-gray-500 mb-8 leading-relaxed">
            Ops! Parece que você se perdeu. A página que você está procurando
            não existe ou foi movida.
          </p>

          {/* Botão de ação */}
          <div className=" flex justify-center">
            <Button
              onClick={handleGoHome}
            >
              Voltar para a página inicial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
