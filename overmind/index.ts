import {IConfig} from 'overmind';
import {createHook} from 'overmind-react';
import {state} from './state';

export const config = {state};

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
