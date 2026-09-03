import React from "react";
import { ArrowRight, Shield, User } from "lucide-react";
import { Link } from "react-router-dom"; // Added missing Link import

const PortalLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage your organization's workforce, oversee operations, and access administrative tools.",
      icon: Shield, // Updated to use imported lucide-react icon
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "Access your personal information, view schedules, and manage your work-related tasks.",
      icon: User, // Updated to use imported lucide-react icon
    },
  ];

  return (
    <>
      <div className="flex min-h-screen w-full bg-white font-sans">
        {/* Left Panel - Branding (Hidden on smaller screens) */}
        <div className="relative hidden w-1/2 flex-col justify-center overflow-hidden bg-[#181636] p-16 lg:flex xl:p-24">
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]"></div>

          <div className="relative z-10 max-w-lg">
            <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-white xl:text-6xl">
              Employee
              <br />
              Management System
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              Streamline your workforce operations, track attendance, manage
              payroll, and empower your team securely.
            </p>
          </div>
        </div>

        {/* Right Panel - Portal Selection */}
        <div className="flex w-full flex-col p-8 lg:w-1/2 lg:p-16 xl:p-24">
          <div className="flex-1"></div>

          <div className="mx-auto w-full max-w-md">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h2>
            <p className="mb-10 text-slate-500">
              Select your portal to securely access the system.
            </p>

            <div className="space-y-4">
              {/* Mapped Portal Links */}
              {portalOptions.map((portal) => (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-[#FAFAFA] p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className="flex items-center gap-4">
                    {portal.icon && (
                      <portal.icon className="h-6 w-6 text-slate-400 group-hover:text-indigo-600 transition-colors duration-300" />
                    )}
                    <span className="text-lg font-medium text-slate-800">
                      {portal.title}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-indigo-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 flex flex-1 items-end justify-center lg:justify-start">
            <div className="mx-auto w-full max-w-md text-left">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} GreatStack. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortalLanding;