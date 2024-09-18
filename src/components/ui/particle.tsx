'use client';
import React from "react";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Particles from "react-tsparticles";

export class ParticlesContainer extends React.PureComponent {
  async customInit(engine: Engine): Promise<void> {
    await loadStarsPreset(engine);
  }
  render() {
    const options = {
      preset: "stars",
    };

    return <Particles options={options} init={this.customInit.bind(this)} />;
  }
}