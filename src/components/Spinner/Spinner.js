import { ThreeCircles } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div>
      {/* <p>Loading...</p> */}
      <ThreeCircles
        height="100"
        width="100"
        visible={true}
        wrapperStyle={{
          position: 'fixed',
          top: '25%',
          left: '50%',
          zIndex: '19',
        }}
        outerCircleColor="#eb348c"
        innerCircleColor="#34b7eb"
        middleCircleColor="#34eb4f"
      />
    </div>
  );
};
