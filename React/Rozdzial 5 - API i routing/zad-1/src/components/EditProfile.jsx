import { useParams } from 'react-router-dom';

function EditProfile() {
  let { id } = useParams();

  return (
    <div>
      <h1>Edytuj Profil: {id}</h1>
    </div>
  );
}

export default EditProfile;