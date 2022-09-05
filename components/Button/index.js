import * as C from './styled';

export const Button = ({title, fn}) => {
    return (
        <C.Button onClick={fn}>{title}</C.Button>
    );
}