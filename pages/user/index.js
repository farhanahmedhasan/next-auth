import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";

const UserProfile = () => {
  return (
    <div className="container">
      <h2 className="text-6xl my-20 text-center font-bold">Your User Profile</h2>
      <div className="text-white font-ubuntu max-w-lg mx-auto my-16 py-8 px-6 bg-indigo-800 rounded-lg ">
        <form>
          <Input type="password" label="New Password" />

          <Input classWrapper="mb-8" type="password" label="Old Password" />

          <Button text="Change Password" />
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
