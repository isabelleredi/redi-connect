// Copied from https://github.com/streamich/react-use/blob/master/src/useList.ts

import { useState } from "react";

export interface Actions<T> {
  set: (list: T[]) => void;
  clear: () => void;
  updateAt: (index: number, item: T) => void;
  remove: (index: number) => void;
  push: (item: T) => void;
  filter: (fn: (value: T) => boolean) => void;
  sort: (fn?: (a: T, b: T) => number) => void;
  toggle: (item: T) => void;
}

export const useList = <T>(initialList: T[] = []): [T[], Actions<T>] => {
  const [list, set] = useState<T[]>(initialList);

  return [
    list,
    {
      set,
      clear: () => set([]),
      updateAt: (index, entry) =>
        set(currentList => [
          ...currentList.slice(0, index),
          entry,
          ...list.slice(index + 1)
        ]),
      remove: index =>
        set(currentList => [
          ...currentList.slice(0, index),
          ...list.slice(index + 1)
        ]),
      push: entry => set(currentList => [...currentList, entry]),
      filter: fn => set(currentList => currentList.filter(fn)),
      sort: (fn?) => set(currentList => [...currentList].sort(fn)),
      toggle: entry =>
        set(currentList => {
          const index = currentList.indexOf(entry);
          if (index === -1) {
            return [...currentList, entry];
          }
          return currentList.filter(v => v !== entry);
        })
    }
  ];
};
