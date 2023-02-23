import Image from "next/image";

const MemoryCard = ({ src, id }: { src: string; id: string }) => {
  return (
    <div className="border rounded border-black p-4">
      <Image src={src} alt={id} width={96} height={96} />
    </div>
  );
};

export default MemoryCard;
