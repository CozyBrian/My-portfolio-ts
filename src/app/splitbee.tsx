"use client";
import splitbee from "@splitbee/web";
import React, { useEffect } from "react";

export default function SplitBee({ children }: { children: React.ReactNode }) {
  useEffect((): void => {
    splitbee.init({
      apiUrl: "/sb-api",
      scriptUrl: "/sb.js",
    });
  }, []);
  return <>{children}</>;
}
