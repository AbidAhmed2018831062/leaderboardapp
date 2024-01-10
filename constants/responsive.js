import { Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');


const scaleFactor = width / 375; 


const headingFontSize = 20 * scaleFactor;
const subheadingFontSize = 16 * scaleFactor;
const bodyFontSize = 14 * scaleFactor;


export default {
    headingFontSize,
    subheadingFontSize,
    bodyFontSize,
    scaleFactor
}