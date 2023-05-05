import {
  HeaderLayout,
  ProfileContainer,
} from "@/styles/components/HeaderStyles";
import Image from "next/image";
import Typography from "./Typography";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <HeaderLayout>
      <Image src={"/assets/logo.svg"} alt="logo" width={35} height={35} />
      <Navbar />
      <Profile />
    </HeaderLayout>
  );
}

export const Profile = () => {
  return (
    <ProfileContainer>
      <Image src={"/assets/profile.svg"} alt="logo" width={35} height={35} />
      <Typography typeface={"M2"}>Nickname</Typography>
    </ProfileContainer>
  );
};
