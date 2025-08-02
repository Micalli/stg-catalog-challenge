import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { CardAuth } from '../../components/CardAuth';
// import { cn } from "../lib/utils";

export  function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log("Form submitted");
  };

  return (
    <div className=" h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Principal */}
        <CardAuth
          title="Bem-vindo de volta!"
          subtitle="Entre com suas credenciais"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                // {...register("email")}
              />
            </div>

            <div>
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                // {...register("email")}
              />
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Esqueceu a senha?
              </a>
            </div>

            <Button type="submit" className="w-full  gap-2 mb-12">
              Entrar
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Não tem uma conta?
              <Link
                to="/register"
                // onClick={() => setIsLogin(!isLogin)}
                className="ml-1 cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
              >
                <a href="">Criar conta</a>
              </Link>
            </p>
          </div>
        </CardAuth>
      </div>
    </div>
  );
}
