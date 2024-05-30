import { useParams } from 'react-router-dom';

function ProfileDetail() {
  let { id } = useParams();

  return (
    <div>
      <h1>Profil Użytkownika: {id}</h1>
    </div>
  );
}

export default ProfileDetail;