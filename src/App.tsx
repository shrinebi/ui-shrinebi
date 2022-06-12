import { Provider } from "react-redux";
import { store } from "redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { RootRouter } from "routes";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RootRouter />
      </ChakraProvider>
    </Provider>
  );
};

App.displayName = "ShrineApp";
