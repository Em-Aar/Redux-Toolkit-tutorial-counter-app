"use client";
import { reduxStore } from "@/redux/store";
import { Provider } from "react-redux";

export default function MyCustomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
