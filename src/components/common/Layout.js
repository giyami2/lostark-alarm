import { MainLayout } from "@/styles/components/MainStyles";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <MainLayout>
      <Header />
      {children}
    </MainLayout>
  );
}
