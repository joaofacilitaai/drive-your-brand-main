import { Car } from "lucide-react";

/* =============================================================================
   🎨 LOGO DA EMPRESA
   
   PARA PERSONALIZAR:
   - Substitua o ícone Car por uma imagem: <img src="/sua-logo.png" />
   - Ou altere o texto abaixo para o nome da sua empresa
   ============================================================================= */

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ícone/Logo - Substitua por sua logo aqui */}
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
        <Car className="w-6 h-6 text-primary-foreground" />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          {/* Nome da empresa - Edite aqui */}
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            ELITE
          </span>
          <span className="text-xs text-primary font-medium -mt-1">
            MOTORS
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
