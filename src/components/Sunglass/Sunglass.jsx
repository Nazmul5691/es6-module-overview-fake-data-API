// import add from '../../Utils/calculate';
import { add, multiply, divideTheFirstNumberIntoTheSecondNumber as divide } from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css'

const Sunglass = () => {

    const first = 55;
    const second = 55;
    const sum = add(first, second);
    const mul = multiply(first, second);
    const div = divide(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;