import { InfoContainer , Contact, Name , ProfileContainer, Text, Message } from "./Profile";
import { Header } from "../header";
import Particles from "react-tsparticles";
import {AiOutlineMessage} from 'react-icons/ai'

export function Profile() {
  return (
    <ProfileContainer>
      <Particles
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          zIndex: -1,
        }}
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: ["grab", "bubble"],
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 10,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
                duration: 10,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 30,
              },
              value: 2,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: false,
          fullScreen: false,
          backgroundMode: {
            enable: false,
            zIndex: -1,
          },
        }}
      />

      <InfoContainer>
        <Name>Leandro Cavallari</Name>
        <Text>I'm a fullstack developer, feel free to know me here</Text>
        <Contact href="">Send a message <Message/> </Contact>
      </InfoContainer>
    </ProfileContainer>
  );
}
