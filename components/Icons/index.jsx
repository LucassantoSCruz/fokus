import Svg, { Circle, Path } from 'react-native-svg';

export const IconPlay = () => {
    return (
        <Svg width="11" height="14" viewBox="0 0 11 14" fill="none" >
            <Path d="M0.015625 0.015625L10.9844 7L0.015625 13.9844V0.015625Z" fill="#021123" />
        </Svg >
    )
}

export const IconPause = () => {
    return (
        <Svg width="12" height="14" viewBox="0 0 12 14" fill="none" >
            <Path d="M8.01562 0.015625H12V13.9844H8.01562V0.015625ZM0 13.9844V0.015625H3.98438V13.9844H0Z" fill="#021123" />
        </Svg >
    )
}

export const IconCheck = ({ checked }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Circle cx="12" cy="12" r="12" fill={checked ? '#00F4BF' : '#FFF'} />
            <Path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#021123" />
        </Svg>
    )
}

export const IconPencil = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Circle cx="16" cy="16" r="15.5" stroke="#021123" />
            <Path d="M24.7188 11.0312L22.8906 12.8594L19.1406 9.10938L20.9688 7.28125C21.1562 7.09375 21.3906 7 21.6719 7C21.9531 7 22.1875 7.09375 22.375 7.28125L24.7188 9.625C24.9062 9.8125 25 10.0469 25 10.3281C25 10.6094 24.9062 10.8438 24.7188 11.0312ZM7 21.25L18.0625 10.1875L21.8125 13.9375L10.75 25H7V21.25Z" fill="#021123" />
        </Svg>
    )
}

export const IconTrash = () => {
    return (
        <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Circle cx="16" cy="16.5" r="15.5" stroke="#021123" />
            <Path d="M11 26C10.45 26 9.97917 25.8042 9.5875 25.4125C9.19583 25.0208 9 24.55 9 24V11H8V9H13V8H19V9H24V11H23V24C23 24.55 22.8042 25.0208 22.4125 25.4125C22.0208 25.8042 21.55 26 21 26H11ZM21 11H11V24H21V11ZM13 22H15V13H13V22ZM17 22H19V13H17V22Z" fill="#021123" />
        </Svg>
    )
}