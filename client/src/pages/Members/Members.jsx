
import { useState } from "react";

import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import "./Members.css";

function Members() {
  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "Pema" },
    { id: 2, name: "Tshewang" },
  ]);

  const handleAddMember = (event) => {
    event.preventDefault();

    const name = memberName.trim();

    if (!name) {
      return;
    }

    const newMember = {
      id: Date.now(),
      name,
    };

    setMembers((prev) => [...prev, newMember]);
    setMemberName("");
  };

  const handleDeleteMember = (id) => {
    setMembers((prev) =>
      prev.filter((member) => member.id !== id)
    );
  };

  return (
    <div className="members-page">

      <PageTitle
        title="Members"
        description="Manage gym members and their information."
      />

      {/* Input event */}
      <Card
        title="Add New Member"
        description="Enter a member name below."
      >

        <form
          className="member-form"
          onSubmit={handleAddMember}
        >

          <input
            type="text"
            value={memberName}
            onChange={(event) =>
              setMemberName(event.target.value)
            }
            placeholder="Enter member name"
          />

          <Button type="submit">
            Add Member
          </Button>

        </form>

        <p className="input-preview">
          Entered Name: {memberName || "Not entered"}
        </p>

      </Card>

      {/* Dynamic rendering */}
      <div className="members-list">

        <h2>Member List ({members.length})</h2>

        {members.length === 0 ? (
          <p className="empty-message">
            No members available.
          </p>
        ) : (

          members.map((member) => (
            <Card
              key={member.id}
              title={member.name}
              description={`Member ID: ${member.id}`}
            >

              <Button
                variant="danger"
                onClick={() =>
                  handleDeleteMember(member.id)
                }
              >
                Delete Member
              </Button>

            </Card>
          ))

        )}

      </div>

    </div>
  );
}

export default Members;
