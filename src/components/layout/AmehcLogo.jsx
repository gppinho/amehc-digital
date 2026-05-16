// Logo fiel ao original: elipse com borda amarela, fundo azul-roxo, texto AMEHC em amarelo
export default function AmehcLogo({ size = "md" }) {
  const sizes = {
    sm: { w: 70, h: 36 },
    md: { w: 90, h: 46 },
    lg: { w: 120, h: 62 },
  };
  const { w, h } = sizes[size] || sizes.md;

  return (
    <svg width={w} height={h} viewBox="0 0 120 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Elipse de fundo */}
      <ellipse cx="60" cy="31" rx="58" ry="29" fill="#2E207A" />
      {/* Borda amarela */}
      <ellipse cx="60" cy="31" rx="58" ry="29" fill="none" stroke="#F5C518" strokeWidth="3" />
      {/* Texto AMEHC */}
      <text
        x="60"
        y="38"
        textAnchor="middle"
        fill="#F5C518"
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="2"
      >
        AMEHC
      </text>
    </svg>
  );
}