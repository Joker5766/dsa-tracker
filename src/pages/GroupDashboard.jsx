import { mockGroup } from "../data/mockGroup";

function GroupDashboard() {
  const group = mockGroup;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{group.name}</h1>

      <p className="mt-2">
        Captain: <strong>{group.captain}</strong>
      </p>

      <h2 className="mt-6 text-xl font-semibold">Members</h2>

      <ul className="list-disc ml-6 mt-2">
        {group.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default GroupDashboard;