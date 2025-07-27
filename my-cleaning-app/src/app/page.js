'use client'
import Home from '../components/Home/page'
import FeedbackForm from '../components/FeedbackForm/page'
import Preloader from "../components/Preloader/PreloaderPage";
import {useState} from "react";

const Page = () => {
    const [loading, setLoading] = useState(false)
    return (

        <div>
            {loading ? (
                    <>
                        <Home/>
                        <FeedbackForm/>
                    </>)
                : (
                    <Preloader setLoading={setLoading}/>
                )}


        </div>
    );
};

export default Page;
