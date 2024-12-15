import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import { useFetch } from "hooks/api";
const ProfileOverview = () => {
  const { data: result } = useFetch("http://localhost:8000/medecines");
  const medecines = result?.data;
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        {medecines?.map((medecine, index) => (
          <div key={medecine.id} className="col-span-4 lg:!mb-0">
            <Banner medecine={medecine} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOverview;
