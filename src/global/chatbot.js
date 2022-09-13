const componentDidMount = () => {
    const isBrowser = typeof window !== "undefined"

    if (isBrowser){
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="b2521efd-200d-46c7-8438-f8c3669f2208";
        (function(){
            let d=document;
            let s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;d.getElementsByTagName("head")[0].appendChild(s);
        })();
    }
}

export default componentDidMount
