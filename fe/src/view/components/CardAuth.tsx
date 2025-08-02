import { User } from 'lucide-react'
interface CardAuthProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function CardAuth({ children, title, subtitle }: CardAuthProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
