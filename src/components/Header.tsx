import Button from './Button';
export interface Header {
    title: string;
}
const Header = ({title}: Header) => {
    const onClick = () => {
        console.log('clicked');
    }
    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button buttonColour='green' buttonText='Add' buttonOnClick={onClick}/> 
        </header>
      );
}
 
export default Header;