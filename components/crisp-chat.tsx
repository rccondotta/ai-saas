"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b7e37580-0f33-4b07-8771-ac1e0d71a331");
  }, []);

  return null;
};
