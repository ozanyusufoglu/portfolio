import SideMenu from "../../components/SideMenu";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SideMenu />
      {children}
    </>
  );
}
