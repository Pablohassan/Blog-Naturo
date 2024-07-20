
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Page1 from "../components/page1";
import logolaure from "../../public/assets/loglaure2.png";
export default function Root() {
  return (
    <>
      <>

        <Navbar style={{backgroundColor:"#BEEDD0"}} className="  h-20" shouldHideOnScroll >
          <NavbarBrand >
             <img src={logolaure} style={{height:"200px"}} />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 font-black " justify="center">
            <NavbarItem>
              <Link color="foreground" href={`/blog`}>
                Blog
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href={`/contacts/1`} aria-current="page">
                Consultations
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Lavida loca
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="secondary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </>

      <>
        <Page1 />

      </>
    </>
  );
}