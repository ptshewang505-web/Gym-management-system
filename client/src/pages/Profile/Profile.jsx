
import { useState } from "react";

import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {
  const [name, setName] = useState("Admin");
  const [editing, setEditing] = useState(false);

  return (
    <div>

      <PageTitle
        title="Profile"
        description="Manage your account information."
      />

      <Card
        title="Administrator Profile"
        description="Update your profile name."
      >

        {editing ? (

          <input
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Enter your name"
          />

        ) : (

          <h2>{name}</h2>

        )}

        <Button
          onClick={() => setEditing((prev) => !prev)}
        >
          {editing ? "Save" : "Edit Profile"}
        </Button>

      </Card>

    </div>
  );
}

export default Profile;
