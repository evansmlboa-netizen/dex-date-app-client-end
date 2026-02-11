const GradientBlobs = () => (
  <>
    <div
      className="gradient-bg-blob"
      style={{
        width: 300,
        height: 300,
        top: '5%',
        right: '-5%',
        background: 'radial-gradient(circle, hsl(263, 70%, 50%) 0%, transparent 70%)',
      }}
    />
    <div
      className="gradient-bg-blob"
      style={{
        width: 250,
        height: 250,
        bottom: '20%',
        left: '-8%',
        background: 'radial-gradient(circle, hsl(330, 81%, 60%) 0%, transparent 70%)',
      }}
    />
    <div
      className="gradient-bg-blob"
      style={{
        width: 200,
        height: 200,
        top: '50%',
        right: '10%',
        background: 'radial-gradient(circle, hsl(258, 90%, 66%) 0%, transparent 70%)',
      }}
    />
  </>
);

export default GradientBlobs;
