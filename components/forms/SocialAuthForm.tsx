"use client";

import React from "react";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonColors =
    "background-dark400_light900 body-medium text-dark100_light900 flex-1 min-h-12 w-full rounded-2 px-4 py-3.5";

  const handleSocialSignIn = async (provider: 'github' | 'google') => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonColors} onClick={() => handleSocialSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span className="text-base-semibold">Continue with GitHub</span>
      </Button>
      <Button className={buttonColors} onClick={() => handleSocialSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span className="text-base-semibold">Continue with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
