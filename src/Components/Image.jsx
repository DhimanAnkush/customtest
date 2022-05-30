export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img src={src} alt={alt} width={width} height={height} borderRadius={borderRadius} style={{borderRadius: borderRadius, objectFit: fit}}/>
    </div>
  );
};
