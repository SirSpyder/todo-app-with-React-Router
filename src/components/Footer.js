function Footer() {
    return (
        <footer style={{ backgroundColor: 'greenyellow', padding: '10px', textAlign: 'center', marginTop: '20px' }}>
            <p>&copy; {new Date().getFullYear()} My To-Do App</p>
        </footer>
    );
}

export default Footer;
