// components/Name.tsx

// Define proper TypeScript interfaces
interface NameProps {
   size?: 'small' | 'default' | 'large' | 'xl';
   color?: 'indigo' | 'gray' | 'white' | 'purple' | 'blue';
   className?: string;
   isClickable?: boolean;
}

// Reusable Name Component
const Name: React.FC<NameProps> = ({
   size = "default",
   color = "indigo",
   className = "",
   isClickable = false,
}) => {
   // Define size variants
   const sizeClasses = {
      small: "text-lg",
      default: "text-2xl",
      large: "text-4xl",
      xl: "text-6xl",
   } as const;

   // Define color variants
   const colorClasses = {
      indigo: "text-indigo-600",
      gray: "text-gray-900",
      white: "text-white",
      purple: "text-purple-600",
      blue: "text-blue-600",
   } as const;

   // Define hover effects for clickable instances
   const hoverClasses = isClickable
      ? "hover:text-opacity-80 transition duration-300 cursor-pointer"
      : "";

   const baseClasses = `font-bold ${sizeClasses[size]} ${colorClasses[color]} ${hoverClasses} ${className}`;

   return <span className={baseClasses}>{"<David Emmanuel />"}</span>;
};

export default Name;
