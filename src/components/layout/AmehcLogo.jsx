const IMAGE_URL = "https://media.base44.com/images/public/6a067507314187c2ed5afd9e/639002061_Cpiadelogo_amehc.png";

export default function AmehcLogo({ size = "md" }) {
  const sizes = {
    sm: { w: 70, h: 36 },
    md: { w: 100, h: 52 },
    lg: { w: 130, h: 67 },
  };
  const { w, h } = sizes[size] || sizes.md;

  return (
    <img
      src={IMAGE_URL}
      alt="AMEHC"
      width={w}
      height={h}
      style={{ objectFit: "contain" }}
    />
  );
}