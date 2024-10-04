import { Menu } from "lucide-react";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import ProfileEdit from "./components/ProfileEdit";

const App = () => {
  return (
    <div className="flex">
      <div className="hidden lg:flex">
        <DropdownMenu />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <ProfileEdit />
      </div>
    </div>
  );
};

export default App;
