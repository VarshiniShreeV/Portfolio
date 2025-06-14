import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot.json';

function Assistant({ message }) {
  return (
    <div className="flex items-center gap-4">
      <Lottie animationData={robotAnimation} style={{ width: 300 }} />
      <div className="bg-white text-black p-1 rounded shadow">{message}</div>
    </div>
  );
}

export default Assistant;
