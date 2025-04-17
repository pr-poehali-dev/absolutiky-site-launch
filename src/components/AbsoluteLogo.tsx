interface AbsoluteLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function AbsoluteLogo({ 
  className = "", 
  width = 100, 
  height = 100 
}: AbsoluteLogoProps) {
  return (
    <img 
      src="https://cdn.poehali.dev/files/ede9a40b-4bd4-43cb-acf7-2d99b5f9868d.jpg"
      alt="Absolute Logo"
      className={`object-cover ${className}`}
      width={width}
      height={height}
    />
  );
}