
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <PageTitle
        title="My Profile"
        subtitle="View your account information"
      />

      <Card
        title="User Information"
        description="Manage your personal account details."
      >
        <Button onClick={() => alert("Edit profile clicked")}>
          Edit Profile
        </Button>
      </Card>
    </div>
  );
}

export default Profile;
