import Lottie from 'lottie-react';
import animationData from '../../assets/wicketanimation.json';
const WicketAnimation = () => {
    return (
        <div className="w-full h-screen bg-zomato_red flex justify-center items-center">
            <Lottie
                animationData={animationData}
                loop={false}
                style={{ width: 300, height: 300 }}
            />
        </div>
    )
}

export default WicketAnimation