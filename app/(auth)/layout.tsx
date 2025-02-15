import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center px-4 py-10 justify-center bg-auth-light dark:bg-auth-dark bg-center bg-cover bg-no-repeat">
      <section className="light-border background-light800_darkgradient shadow-light100_dark900 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h1-bold text-dark100_light900">Join The Flow</h1>
            <p className="text-dark500_light400 paragraph-regular">
              Join the Flow to connect with the community and start your journey
              to success.
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="site-logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
