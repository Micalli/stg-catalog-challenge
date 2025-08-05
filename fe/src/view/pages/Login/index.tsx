import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { CardAuth } from "../../components/CardAuth";
import { useLoginController } from "./useLoginController";
import { motion, Variants } from "framer-motion";

export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

     const containerVariants: Variants = {
       hidden: { opacity: 0 },
       visible: {
         opacity: 1,
         transition: { staggerChildren: 0.15, delayChildren: 0.2 },
       },
     };

     const itemVariants: Variants = {
       hidden: { opacity: 0, y: 30 },
       visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.4, ease: "easeOut" }, // Corrigido para um transition válido
       },
     };

    return (
      <motion.div
        className="h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Card Principal */}
          <CardAuth
            title="Bem-vindo de volta!"
            subtitle="Entre com suas credenciais"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Inputs com animação no foco */}
              <motion.div variants={itemVariants}>
                <Input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Input
                  type="password"
                  placeholder="Senha"
                  error={errors.password?.message}
                  {...register("password")}
                />
              </motion.div>

              <motion.div
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Esqueceu a senha?
                </a>
              </motion.div>

              {/* Botão com animação */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "keyframes", stiffness: 300 }}
              >
                <Button
                  type="submit"
                  className="w-full gap-2 mb-12"
                  isLoading={isPending}
                >
                  Entrar
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.form>

            <motion.div className="mt-6 text-center" variants={itemVariants}>
              <p className="text-gray-600">
                Não tem uma conta?
                <Link
                  to="/register"
                  className="ml-1 cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                >
                  Criar conta
                </Link>
              </p>
            </motion.div>
          </CardAuth>
        </motion.div>
      </motion.div>
    );
}
