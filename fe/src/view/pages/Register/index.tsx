import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { CardAuth } from "../../components/CardAuth";

export  function Register() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className=" h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <CardAuth title="Criar conta" subtitle="Preencha os dados abaixo">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                type="name"
                placeholder="Nome"
                autoComplete="off"
                // {...register("email")}
              />
            </div>

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

            <Button type="submit" className="w-full  gap-2 mb-12">
              Criar conta
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Já tem uma conta?
              <Link
                to="/login"
                // onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                Fazer login.
              </Link>
            </p>
          </div>
        </CardAuth>
      </div>
    </div>
  );
}
