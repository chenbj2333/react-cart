import { createContext, useContext } from 'react';
import UserStore from './user';

function createStores() {
  return {
    userStore: new UserStore(),
  };
}

const stores = createStores();

const StoresContext = createContext(stores);

export function useUserStore() {
  const { userStore } = useContext(StoresContext);
  return userStore;
}

export { stores, StoresContext };
