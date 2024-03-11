import React from 'react';

export const withHook = <T extends any>(
  hook: (props: T) => T,
  Component: React.ComponentType<any>,
) => {
  return (props: T) => {
    return <Component {...hook(props)} />;
  };
};
