import { ArrowRight } from "lucide-react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Input } from "../../components/Input";
import { CardAuth } from "../../components/CardAuth";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { errors, handleSubmit, register, isPending } =
    useRegisterController();

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
       transition={{ duration: 0.6, ease: "easeOut" }}
     >
       <CardAuth title="Criar conta" subtitle="Preencha os dados abaixo">
         <motion.form
           onSubmit={handleSubmit}
           className="space-y-6"
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
           <motion.div variants={itemVariants}>
             <Input
               type="name"
               placeholder="Nome"
               autoComplete="off"
               error={errors.name?.message}
               {...register("name")}
             />
           </motion.div>

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
               {...register("password")}
               error={errors.password?.message}
             />
           </motion.div>

           <motion.div
             variants={itemVariants}
             whileHover={{ scale: 1.03 }}
             whileTap={{ scale: 0.97 }}
             transition={{ type: "spring", stiffness: 300 }}
           >
             <Button
               type="submit"
               className="w-full gap-2 mb-12"
               isLoading={isPending}
             >
               Criar conta
               <ArrowRight className="w-5 h-5" />
             </Button>
           </motion.div>
         </motion.form>

         <motion.div className="mt-6 text-center" variants={itemVariants}>
           <p className="text-gray-600">
             Já tem uma conta?
             <Link
               to="/login"
               className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
             >
               Fazer login.
             </Link>
           </p>
         </motion.div>
       </CardAuth>
     </motion.div>
   </motion.div>
 );
}
