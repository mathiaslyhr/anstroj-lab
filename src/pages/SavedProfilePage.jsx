import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SavedProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const res = await fetch(`/api/get-profile?id=${id}`);
      const data = await res.json();
      setProfile(data.profile);
    }
    loadProfile();
  }, [id]);

  if (!profile) return <p>Indlæser duftprofil…</p>;

  return (
    <div>
      <h1>Din gemte duftprofil</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
