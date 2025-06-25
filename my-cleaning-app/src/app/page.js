import ClientPage from '../components/ClientPage';

const Page = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <a href={'/'}>General</a>
            <a href={'/about'}>About</a>
            <ClientPage/>
        </div>
    );
};

export default Page;
