import Button from './Button';
export interface HeaderProps {
    title: string;
    onButtonClick: () => void;
    showAdd: boolean;
}
const Header = ({title, onButtonClick, showAdd}: HeaderProps) => {
    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button buttonColour={showAdd ? 'red' :'green'} buttonText={showAdd ? 'Close': 'Add'} buttonOnClick={onButtonClick}/> 
        </header>
      );
}
 
export default Header;