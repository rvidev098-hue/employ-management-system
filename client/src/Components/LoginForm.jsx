import React from "react";
import PortalLanding from "./LoginLeft"; 
import { ArrowBigLeft, ArrowBigLeftIcon } from "lucide-react";

const LoginForm = () => {
return (
    <>
    <div className="min-h-screen flex flex-col md:flex-row">
      <PortalLanding />
      <div className="w-full max-w-md animate-fade-in">
        <Link to="/login" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"> 
        <ArrowBigLeftIcon size={16} /> Back To Portals
        </Link>

      </div>
    </div>
    </>
)
}

export default LoginForm;