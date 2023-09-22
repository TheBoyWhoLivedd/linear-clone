import React from "react";
import { Hero, HeroSubtitle, HeroTitle } from "../Hero";
import { Button, Highlight } from "../ui/Button";
import { ChevronIcon } from "../icons/chevron";
import { HeroImage } from "../HeroImage";

export const HomePageHero = () => {
  return (
    <Hero>
      <Button
        href="/"
        intent="secondary"
        size="sm"
        className="translate-y-[-1rem] animate-fade-in opacity-0"
      >
        <span>Announcing our $35M Series B</span>
        <Highlight>→</Highlight>
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Linear is a better way
        <br className="hidden md:block" /> to build products
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubtitle>
      <Button
        href="/"
        intent="primary"
        size="lg"
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      >
        Get started
        <Highlight>
          <ChevronIcon fill="currentColor" />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  );
};
