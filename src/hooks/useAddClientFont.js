import {useEffect} from "react";

export const useAddClientFont = (isAdded) => {

    useEffect(() => {
        if (!isAdded) {
            return;
        }
        if (document.getElementById('font-container')) {
            return
        }
        const container = document.createElement('div');
        container.id = 'font-container'
        container.innerHTML = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300;400;500;600&display=swap" rel="stylesheet"> 
`
        document.body.append(container);
    }, [isAdded])
}