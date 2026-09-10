import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Hero from "../Home/Hero";

test("Hero image is present", () => {
    render(<Hero />);
    const image = screen.getByAltText("Hero Image");
    expect(image).not.toBeNull();
    expect(image.getAttribute("src")).toBe("/homeHero.png");

})