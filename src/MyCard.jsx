const MyCard = ({ comment }) => {
  return (
    <div className="container m-3 p-3 text-center border">
      <h2 className="text-primary">{comment.name}</h2>
      <p>{comment.body}</p>
    </div>
  );
};

export default MyCard;
