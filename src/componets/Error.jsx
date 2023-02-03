const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 font-bold uppercase mb-3 rounded">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
