import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-yellow-500 text-black-950 text-3xl p-8 text-center ml-96 mr-96  ">
      User: {userid}
    </div>
  );
}

export default User;
