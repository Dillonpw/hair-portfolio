import Images from "./Images";

const Gallery: React.FC = () => {
  return (
    <div className="m-10 flex h-auto w-80 flex-col rounded-lg border-2 border-black">
      {Images.map((image, index) => (
        <div key={index}>
          <img
            className="rounded-md"
            src={image.src}
            alt={`Gallery item ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
