import { createBrowserRouter } from "react-router";
import ContactList from "./components/contactListComp/contactListRender";
import NewContactForm from "./components/forms/newContactForm";
import App from "./App";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true,Component: ContactList },
      { path: 'new-contact', Component: NewContactForm },
    ]
  }
]);

export default router