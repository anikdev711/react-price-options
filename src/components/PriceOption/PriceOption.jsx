import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name, price, features} = option;

    return (
        <div className='bg-blue-500 text-white flex flex-col rounded-lg p-4'>
            <h2 className='text-center'>
                <span className='font-extrabold text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8 font-bold'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='btn btn-accent w-full text-white font-bold hover:bg-green-900 mt-12'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;