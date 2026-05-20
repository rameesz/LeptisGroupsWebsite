export default function PrimaryButton({ text, color = 'bg-[#194a9a]' }) {
  const hoverColor = color === 'bg-[#194a9a]' ? 'hover:bg-[#153d7e]' : 'hover:opacity-90';
  
  return (
    <button
      className={`${color} text-white px-10 py-3 font-medium ${hoverColor} transition cursor-pointer`}
    >
      {text}
    </button>
  );
}
