import { Header } from "../../components/Header";
import { HistoryItem } from "../../components/HistoryItem";
import { useHistoryController } from "./useHistoryController";
import { PurchaseHistorySkeleton } from "../../components/PurchaseHistorySkeleton";
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import { motion } from "framer-motion";
export function History() {
  const { history, isLoading } = useHistoryController();

 return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
     <Header />

     <div className="max-w-4xl mx-auto px-4 py-8 ">
       <motion.div
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4 }}
         className="mb-8"
       >
         <h1 className="text-3xl font-bold text-gray-900 mb-2 mt-12">
           Histórico de Compras
         </h1>
         <p className="text-gray-600">
           Acompanhe todas as suas compras realizadas
         </p>
       </motion.div>

       {isLoading && (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.3 }}
           className="flex-grow justify-center items-center h-64"
         >
           <PurchaseHistorySkeleton />
         </motion.div>
       )}

       {history?.length === 0 && (
         <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
           className="text-center py-12"
         >
           <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
             <div className="text-gray-400 mb-4">
               <svg
                 className="w-16 h-16 mx-auto"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                 />
               </svg>
             </div>
             <h3 className="text-lg font-medium text-gray-900 mb-2">
               Nenhuma compra encontrada
             </h3>
             <p className="text-gray-500 mb-6">
               Você ainda não realizou nenhuma compra. Comece a fazer compras
               para ver seu histórico aqui.
             </p>
             <Link to="/">
               <Button className="inline-flex ">Ir para a loja</Button>
             </Link>
           </div>
         </motion.div>
       )}

       {history && !isLoading && (
         <div className="space-y-6">
           {history?.map((item, index) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3, delay: index * 0.05 }}
             >
               <HistoryItem
                 id={item.id}
                 products={item.products}
                 totalPrice={item.totalPrice}
                 createdAt={item.createdAt}
               />
             </motion.div>
           ))}
         </div>
       )}
     </div>
   </div>
 );
}
