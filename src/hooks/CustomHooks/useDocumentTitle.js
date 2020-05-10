import {useEffect} from 'react';

const useDocumentTitle = (count) => {
    useEffect(() =>{
        console.log('updated click');
        document.title = `you clicked times: ${count}`
    }, [count]);
}

export default useDocumentTitle;