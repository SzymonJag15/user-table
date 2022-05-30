import gsap from "gsap";

export const enterAnim = () =>
  gsap
    .timeline()
    .to(".Home__site--left", { duration: 0.1, opacity: 1 })
    .fromTo(".Home__site--left", { x: "-100%" }, { duration: 1, x: "0" })
    .fromTo(
      ".Home__site__circle--bottom",
      { x: 20, y: 20 },
      { duration: 1, opacity: 1, x: 0, y: 0 }
    )
    .fromTo(
      ".Home__title-wrapper__title",
      { x: -20, y: 20 },
      { duration: 0.5, opacity: 1, x: 0, y: 0 }
    )
    .fromTo(
      ".Home__title-wrapper__subtitle",
      { x: -20, y: 20 },
      { duration: 0.5, opacity: 1, x: 0, y: 0 }
    )
    .fromTo(
      ".Home__title-wrapper__separator",
      { x: -20, y: 20 },
      { duration: 0.5, opacity: 1, x: 0, y: 0 }
    );

export const leaveAnim = () =>
  gsap
    .timeline()
    .fromTo(".Home__site--left", { x: "0" }, { duration: 1, x: "-100%" })
    .to(".Home__site--left", { duration: 0.1, opacity: 0 })
    .fromTo(
      ".Home__site__circle--bottom",
      { x: 0, y: 0, opacity: 1 },
      { duration: 1, opacity: 0, x: 20, y: 20 }
    );
