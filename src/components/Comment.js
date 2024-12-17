const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow bg-gray-100 rounded-lg my-2">
      <img
        className="w-10 h-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user-image"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Comment;
