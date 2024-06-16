import { Image } from '@tarojs/components';
import SealImg from './seal.svg';
import Div from '../html/div';

export default ({title, className}: any) => (
    <Div className={`o:.2 p:r d:f ai:c jc:c w:120 h:120 ${className || ''}`}>
        <Image src={SealImg} className='w:100%' />
        <Div className='p:a t:r45 fw:b fs:24'>{title}</Div>
    </Div>
);