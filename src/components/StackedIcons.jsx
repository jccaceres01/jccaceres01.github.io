const StackedIcons = ({techs = []}) => {
  
  if (techs.length > 0) {
    return (
      <div className="flex -space-x-4">
        {
          techs.map((item, idx) => (
            <img key={idx} className="w-10 h-10 border-2 border-blue-400 bg-white rounded-full " src={item} alt="Techonology icon" />
          ))
        }
      </div>
    );
  } else { return null };
}

export default StackedIcons;