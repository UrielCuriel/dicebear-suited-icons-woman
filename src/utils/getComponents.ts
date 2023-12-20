/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

import type { Prng } from '@dicebear/core';
import type { Options, ComponentPickCollection } from '../types.js';
import { pickComponent } from './pickComponent.js';

type Props = {
  prng: Prng,
  options: Options
}

export function getComponents({ prng, options }: Props): ComponentPickCollection {
  const faceComponent = pickComponent({
    prng,
    group: 'face',
    values: options.face,
  });
  const topComponent = pickComponent({
    prng,
    group: 'top',
    values: options.top,
  });
  const bodyComponent = pickComponent({
    prng,
    group: 'body',
    values: options.body,
  });

  return {
    'face': faceComponent,
    'top': topComponent,
    'body': bodyComponent,
  }
};
