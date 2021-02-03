export interface buttonInfo {
    buttonText: string;
    buttonColour: string;
    buttonOnClick: () => void;
}
 
const Button = ({buttonText, buttonColour, buttonOnClick}:buttonInfo) => {
    return ( 
        <button 
        style={{backgroundColor: buttonColour}}
        className='btn'
        onClick={buttonOnClick}>
            {buttonText}
        </button>
    );
}
 
export default Button ;