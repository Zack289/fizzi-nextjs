"use client";

import FloatingCan from "@/components/FloatingCan";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// eslint-disable-next-line
type Props = {};

function Scene({}: Props) {
  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

      //set can starting location
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="blackCherry"
          floatSpped={FLOAT_SPEED}
        />
      </group>

      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="lemonLime"
          floatSpped={FLOAT_SPEED}
        />
      </group>

      <FloatingCan ref={can3Ref} flavor="grape" floatSpped={FLOAT_SPEED} />

      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpped={FLOAT_SPEED}
      />

      <FloatingCan ref={can5Ref} flavor="watermelon" floatSpped={FLOAT_SPEED} />

      <Environment files="hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}

export default Scene;
