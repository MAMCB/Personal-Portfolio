
"use client";
import { Navbar } from "flowbite-react";
import Link from "next/link";

const MyNavBar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} target="_blank" href="https://www.linkedin.com/in/borges-miguel/">
        <img
          src="https://avatars.githubusercontent.com/u/96302464?s=400&u=7f19433a5ee1d99ccfbe0e382282e2e389f3391b&v=4"
          className="mr-3 h-6 sm:h-9 rounded-full shadow-lg dark:shadow-none"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hi I'm Miguel
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/projects">
          Projects
        </Navbar.Link>
        <Navbar.Link href="/about">About me</Navbar.Link>
        <Navbar.Link href="/cv">CV</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar